/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/
const page = document.querySelector(".page");
const pageHeader = document.querySelector(".page-header");

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/
const studentList = document.querySelector(".student-list");
const studentItem = studentList.children.length;
const currentPage = 1;
const studentsPerPage = 10;
const totalPages = studentItem / studentsPerPage;
const showPage = (list, page) => {
  list = studentItem;
  page = totalPages;
  console.log(totalPages);

  for (let i = 0; i < list.length; i++) {
    if (i >= studentsPerPage) {
      list[i].style.display = "none";
    }
    if (i <= studentsPerPage) {
      list[i].style.display = "";
    }
  }
};
showPage();
//showPage(studentItem, 10);
/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/
const appendPageLinks = list => {
  const pages = studentItem.length / 10;
  const div = document.createElement("div");
  div.className = "pagination";
  page.appendChild(div);
  //showPage();
  const ul = document.createElement("ul");
  div.appendChild(ul);

  for (let i = 0; i < pages; i++) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    li.appendChild(a);
    ul.appendChild(li);
    a.textContent = i + 1;
    a.addEventListener("click", e => {
      const a = li.children;
      for (var i = 0; i < a.length; i++) {
        if (e.target.tagName === "A") {
          a[i].className = "active";
          console.log(a[i]);
        }
      }
    });
  }
};
appendPageLinks(studentItem);

// Remember to delete the comments that came with this file, and replace them with your own code comments.
