/****************************
Step form plugin by infodusha
Version 1.0
25.01.2018
**********/
(function($){
	$.fn.stepForm = function(options){

		if(!options.path){ $.error('Path for requests is not set in init options!'); }

		var $this = $(this);
		var step = 0;

		var settings = $.extend({
			post_on_step: false,
			block_selector: ".step_form_block",
			next_selector: ".step_form_next",
			animate_duration: "fast"
		}, options);

		var	onNextBtn = function(event){
			event.preventDefault();
			$this_btn = $(this);
			$this_btn.prop("disabled", true);

			if(settings.post_on_step || $this.find(settings.block_selector).eq(step).is($this.find(settings.block_selector).eq(-2))){
				$.post(settings.path, $this.find("form").serialize())
				.done(function(answer){
					if($this.find(settings.block_selector).eq(step).is($this.find(settings.block_selector).eq(-2))){
						if(settings.result_callback){ settings.result_callback(answer); }
					}
				    $this.find(settings.block_selector).eq(step++).fadeOut(settings.animate_duration, function(){
						$this.find(settings.block_selector).eq(step).fadeIn(settings.animate_duration);
					});
				})
				.fail(function(err){
					$this_btn.prop("disabled", false);
					$.error('Failed to post data! Check the url!');
				});
			} else {
				$this.find(settings.block_selector).eq(step++).fadeOut(settings.animate_duration, function(){
					$this.find(settings.block_selector).eq(step).fadeIn(settings.animate_duration);
				});
			}

		};

		return this.each(function(){
			var $this = $(this);
			$this.find(settings.next_selector).click(onNextBtn);
			$this.find(settings.block_selector).hide();
			$this.find(settings.block_selector).eq(0).show();
		});
 	};
})(jQuery);