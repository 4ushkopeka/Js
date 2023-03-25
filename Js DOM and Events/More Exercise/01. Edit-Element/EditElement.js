function editElement(object, search, replacement) {
    object.textContent = object.textContent.replace(new RegExp(search, 'g'), replacement)
}