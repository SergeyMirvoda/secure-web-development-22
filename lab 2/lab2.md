# Лабораторная работа 2
Знакомство с форматами данных веб.

Проверка следующих навыков: базовые знания HTTP, умение получать данные из веб, определение формата по содержимому документа, преобразование документов в различные форматы.
## Требования к оформлению
> Выложить готовые файлы в свой репозиторий.

## Исходные данные
Веб-сервис https://swapi.dev/.

## Задание 1
1. При помощи [Postman](https://www.postman.com/downloads/) скачайте данные о транспортных средствах во вселенной SW https://swapi.dev/api/vehicles. Обратите внимание, что данные выдаются постранично при помощи аргумента ``?page=n``.  
2. Скачайте 3 страницы (номер страницы нужно добавлять в Url, см. свойство ``next``) и [сохраните](https://learning.postman.com/docs/sending-requests/responses/) их в разных файлах ``vehicles_1.json``,  ``vehicles_2.json`` и т.д.  
3. Убедитесь, что данные в файлах разные.  

## Задание 2
1. Откройте **каждый** файл и удалите из него свойства, отвечающие за информацию о странице (``count, next, previous``)
2. Свойство ``results`` переименуйте в ``vehicles`` https://www.getzola.org/documentation/getting-started/overview/  
3. Сохраните каждый модифицированный файл с новым именем по примеру: ``vehicles_1_data.json``.   

## Задание 3
1. Преобразуйте (вручную или программно) три файла ``vehicles_1_data.json``, ``vehicles_2_data.json``, ``vehicles_3_data.json`` в один ``XML`` файл в кодировке ``Unicode``, выполнив соответствующие преобразования формата.  
2. Проверьте, свой документ на соответствие формату (well-formed) с помощью https://www.liquid-technologies.com/online-xml-validator или https://codebeautify.org/xmlvalidator  
3. Загрузите все 7 файлов в свой репозиторий.  


## Литература
XML Essentials  
https://www.w3.org/standards/xml/core  
JSON  
https://www.json.org/json-ru.html  
Data Formats  
https://www.ksi.mff.cuni.cz/~svoboda/courses/192-MDK/lectures/MDK-Lecture-02-Formats.pdf
