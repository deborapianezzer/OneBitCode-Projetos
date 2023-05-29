function show(){
  const contactList = document.getElementById('contact-list')
  console.log(contactList)

  const listElemets = document.getElementsByTagName('li')
  console.log(listElemets)

  const contactInputs = document.getElementsByClassName('contact-input')
  console.log(contactInputs)

  const contac1 = document.getElementsByName('contac1')
  console.log(contact1)

  const contacts = document.querySelectorAll('#contact-list > li > label')
  console.log(contacts)
}
