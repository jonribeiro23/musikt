function myFunction(x) {
  if (x.matches) {
    // document.body.style.backgroundColor = "yellow";
    let col1 = document.querySelectorAll('#col1')
    let col2 = document.querySelectorAll('#col2')
    let mg = document.querySelectorAll('#mg')
    let curso = document.querySelectorAll('#curso')

    col1.forEach((x) => {
      x.classList.remove("col-8")
    })

    col2.forEach((x) => {
      x.classList.remove("col-4")
    })

    mg.forEach((x) => {
      x.style.margin = '0 10px 0 10px'
    })

    curso.forEach((x) => {
      x.classList.remove("col-4")
      x.setAttribute('class', 'col-12')
    })

  } else {

    let col1 = document.querySelectorAll('#col1')
    let col2 = document.querySelectorAll('#col2')
    let curso = document.querySelectorAll('#curso')

    col1.forEach((x) => {
      x.setAttribute('class', 'col-8')
    })

    col2.forEach((x) => {
      x.setAttribute('class', 'col-4')
    })

    curso.forEach((x) => {
      x.classList.remove("col-12")
      x.setAttribute('class', 'col-4')
    })


    // document.body.style.backgroundColor = "pink";
  }
}

var x = window.matchMedia("(max-width: 700px)")
myFunction(x)
x.addListener(myFunction)
