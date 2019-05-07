/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

//takes the studentList ul and turns it from html collection to nodeList
const studentListUl = document.querySelectorAll(".student-list")[0];
console.log(studentListUl);
//console.log(studentListUl);
const studentListLi = studentListUl.children;
const studentsPerPage = 10;

//list of students, page index

const showPage = (list, page) => {
  const minPerPage = page * studentsPerPage;
  const maxPerPage = (page + 1) * studentsPerPage;

  /*
    loop takes the list and if the i is between the min and max it will load, while the other list items out side of the condition will be hidden.

    index 0 = 1-10
    ect.
    index 2 = 11-20
  */

  for (let i = 0; i < list.length; i++) {
    if (i >= minPerPage && i < maxPerPage) {
      list[i].style.display = "block";
    } else {
      list[i].style.display = "none";
    }
  }
};

const appendPageLinks = list => {
  //how many total students
  const students = list.length;
  //amount of studnets divided by 10
  const pages = students / studentsPerPage;

  const div = document.createElement("div");
  div.className = "pagination";

  const startingPage = document.querySelectorAll(".page")[0];
  startingPage.appendChild(div);
  console.log(startingPage);
  console.log(div);

  const ul = document.createElement("ul");
  div.appendChild(ul);

  const aList = document.getElementsByTagName("A");

  /*loop through how many pages there should be based on how many students there are divided by 10 students per page.
   */
  for (let i = 0; i < pages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    ul.appendChild(li);
    //add 1 so a tags dont start at 0
    a.textContent = i + 1;
    li.appendChild(a);
    a.addEventListener("click", e => {
      //loop through a tags
      for (let i = 0; i < aList.length; i++) {
        console.log(aList[i]);
        //removes className on a tag
        aList[i].className = "";
        //adds className to the clicked a tag
        e.target.className = "active";
      }
      /*list of 10 students and what page they should be on depending on which a tag is clicked.
       */
      showPage(list, i);
    });
  }
  //Makes first a tag 'active' on load.
  aList[0].className = "active";
};
//list of students, first page
showPage(studentListLi, 0);
//List of students
appendPageLinks(studentListLi);
