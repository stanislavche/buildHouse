# Разработчикам

Смотрим структуру и ее соблюдаем.

В общем по верстке:

# Структура проекта

    app             == Final point
      | css         = CSS output
      | fonts       = fonts
      | img         = img destination
      | js          = JS output folder
        | vendor    - JS plugins, directly connected to project
    src             == Source files
      | jade        - HTML sources
      | js          = JS working folder
        | org       - Structure-organization files
        | part      - JS parts for concatenation
        | plugin    - Plugins for concatenation, output in app/js/plugins.js
      | less        = LESS sources
        | 3l        - LESS mixins framework

# Задачи grunt
    "grunt" (without options) - watch task, compiles jade, js and LESS on change
    "grunt build" - build all project files
