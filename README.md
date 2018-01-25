# JQueryStepForm
A JQuery plugin for easy creating step forms

## Usage

1. Including JQuery and the library
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="JQueryStepForm.min.js"></script>
```

2. Adding HTML structure
```html
<div id="stepForm1">
	<form><!-- Form tag is required for pugin correct work -->
		<div class="step_form_block">
			<input type="text" name="name">
			<button type="submit" class="step_form_next">Next »</button>
		</div>
		<div class="step_form_block">
			<input type="text" name="second_name">
			<button type="submit" class="step_form_next">Next »</button>
		</div>
		<div class="step_form_block">
			<input type="text" name="email">
			<button type="submit" class=step_form_next">Next »</button>
		</div>
		<div class="step_form_block">
			<!-- Last block for output message.
			Can be set by a callback or set in HTML -->
			<span id="step_form_result"></span>
		</div>
	</form>	
</div>
```

3. Initialization example
```javascript
$("#stepForm1").stepForm({
	path: "/post.php",
	result_callback: function(answer){
		$("#step_form_result").html(answer);
	}
});
```

### Options

| Option name | Default value | Description
---|---|---
path | `none` | Path for requests (**required**).
result_callback | `none` | Callback function with answer for done requests.
post_on_step | false | Send request every step if `true`.
block_selector | ".step_form_block" | JQuery selector for changing blocks.
next_selector | ".step_form_next" | JQuery selector for "next step" buttons.
animate_duration | "fast" | A string or number determining how long the animation will run.

### **Attention**
The plugin creates `POST` request to the server. All data *serializes* and need to be parsed by a function *unserialize*

# JQueryStepForm
Плагин JQuery для простого создания пошаговых форм

## Использование

1. Подключение JQuery и библиотеки
```html
<script src="https://code.jquery.com/jquery-3.3.1.min.js"></script>
<script src="JQueryStepForm.min.js"></script>
```

2. Добавление HTML структуры
```html
<div id="stepForm1">
	<form><!-- Тег form необходим для корректной работы плагина -->
		<div class="step_form_block">
			<input type="text" name="name">
			<button type="submit" class="step_form_next">Далее »</button>
		</div>
		<div class="step_form_block">
			<input type="text" name="second_name">
			<button type="submit" class="step_form_next">Далее »</button>
		</div>
		<div class="step_form_block">
			<input type="text" name="email">
			<button type="submit" class=step_form_next">Далее »</button>
		</div>
		<div class="step_form_block">
			<!-- Последний блок для вывода сообщения результата.
			Устанавливается через callback или прямо в HTML -->
			<span id="step_form_result"></span>
		</div>
	</form>	
</div>
```

3. Пример инициализации
```javascript
$("#stepForm1").stepForm({
	path: "/post.php",
	result_callback: function(answer){
		$("#step_form_result").html(answer);
	}
});
```

### Настройки

| Имя настройки | Стандартное значение | Описание
---|---|---
path | `не задан` | Путь для запросов (**обязателен**).
result_callback | `не задан` | Callback - функция с ответом для успешно выполненых запросов.
post_on_step | false | Посылать запрос после каждого шага если  `true`.
block_selector | ".step_form_block" | JQuery - селектор для меняющихся блоков.
next_selector | ".step_form_next" | JQuery - селектор для кнопок "далее".
animate_duration | "fast" | Строка или число, показывающее сколько будет идти анимация.

### **Внимание**
Плагин посылает `POST` запрос на сервер. Все данные обрабатываются функцией *serialize* и должны быть обработаны фнукцией *unserialize*