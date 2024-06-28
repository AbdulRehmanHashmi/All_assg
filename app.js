var assignmentsArray = [
    {
        Title: 'JS Chapters ',
        Code: 'https://github.com/AbdulRehmanHashmi/Java-Chapters.git',
        Link: 'https://abdulrehmanhashmi.github.io/Java-Chapters/',
        Date: '22-Feb-2024',
        Description: 'Questions of chapter 1,2,3 and 4.',
    },
    {
        Title: 'Task About Familier Operators',
        Code: 'https://github.com/AbdulRehmanHashmi/Arithmatic.git',
        Link: 'https://abdulrehmanhashmi.github.io/Arithmatic/',
        Date: '29-Feb-2024',
        Description: 'Task about arithmatic operators.',
    },
    {
        Title: 'Array & Methods',
        Code: 'https://github.com/AbdulRehmanHashmi/Array.git',
        Link: 'https://abdulrehmanhashmi.github.io/Array/',
        Date: '12-Mar-2024',
        Description: 'Creating an empty array to use different methods to add and remove elements from start and end.',
    },
    {
        Title: 'For Loop Basic Exercise',
        Code: 'https://github.com/AbdulRehmanHashmi/Loop1.git',
        Link: 'https://abdulrehmanhashmi.github.io/Loop1/',
        Date: '19-Mar-2024',
        Description: 'Assignment of different question by the help of For Loop Basics. ',
    },
    {
        Title: 'Color Picker (rgb color)',
        Code: 'https://github.com/AbdulRehmanHashmi/colorpicker.git',
        Link: 'https://abdulrehmanhashmi.github.io/colorpicker/',
        Date: '27-Apr-2024',
        Description: 'Creating color picker with JS.',
    },
    {
        Title: 'Dice Game',
        Code: 'https://github.com/AbdulRehmanHashmi/numbers.git',
        Link: 'https://abdulrehmanhashmi.github.io/numbers/',
        Date: '29-Apr-2024',
        Description: 'Creating a simple dice game',
    },
    {
        Title: 'Attendance Checker',
        Code: 'https://github.com/AbdulRehmanHashmi/Attendance-Checker.git',
        Link: 'https://abdulrehmanhashmi.github.io/Attendance-Checker/',
        Date: '4-May-2024',
        Description: 'Creating attendance checker for employees to check their attendance history easily.',
    },
    {
        Title: 'Age Calculator',
        Code: 'https://github.com/AbdulRehmanHashmi/age-calculator.git',
        Link: 'https://abdulrehmanhashmi.github.io/age-calculator/',
        Date: '6-May-2024',
        Description: 'Creating age calculator with date and their methods.',
    },
    {
        Title: 'Calculator',
        Code: 'https://github.com/AbdulRehmanHashmi/Calculator.git',
        Link: 'https://abdulrehmanhashmi.github.io/Calculator/',
        Date: '10-May-2024',
        Description: 'Creating a simple calculator to calculate your sum easily.',
    },
    {
        Title: 'JS Image Gallery',
        Code: 'https://github.com/AbdulRehmanHashmi/Image-Gallery.git',
        Link: 'https://abdulrehmanhashmi.github.io/Image-Gallery/',
        Date: '14-May-2024',
        Description: 'Creating a JS image gallery.',
    },
    {
        Title: 'JS Text Editor',
        Code: 'https://github.com/AbdulRehmanHashmi/Text-Editor-1.git',
        Link: 'https://abdulrehmanhashmi.github.io/Text-Editor-1/',
        Date: '18-May-2024',
        Description: 'Creating a JS text editor to change your headings,fonts,style and direction of your text.',
    },
    {
        Title: 'Expense Tracking Application',
        Code: 'https://github.com/AbdulRehmanHashmi/Expense-Tracker.git',
        Link: 'https://abdulrehmanhashmi.github.io/Expense-Tracker/',
        Date: '23-May-2024',
        Description: 'Creating a JS expense tracking application so that you can easily find your expenditures.',
    },
    {
        Title: 'All Assignments Togather',
        Code: '',
        Link: '',
        Date: '25-May-2024',
        Description: 'Doing all assignments togather to find easily.',
    },
    {
      Title: 'Filter Products Search',
      Code: 'https://github.com/AbdulRehmanHashmi/Filter-Product-Search.git',
      Link: 'https://abdulrehmanhashmi.github.io/Filter-Product-Search/',
      Date: '28-June-2024',
      Description: 'Creating filter products search to search products easily.',
  },
    
];

var assignList = document.getElementById('all-assignments')
for(var i = 0; i < assignmentsArray.length; i++) {
    var div =`<div class="p-4 lg:w-1/3">
    <div class="h-full bg-gray-800 bg-opacity-40 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
      <h1 class="title-font sm:text-2xl text-xl font-medium text-white mb-3">${assignmentsArray[i].Title}</h1>
      <p class="leading-relaxed mb-3">${assignmentsArray[i].Description}</p>
      <a
      href="${assignmentsArray[i].Link}" target="_blank"
      class="text-indigo-400 inline-flex items-center">See Preview
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a> </br>
      <a
      href="${assignmentsArray[i].Code}" target="_blank"
      class="text-indigo-400 inline-flex items-center">See Code
        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
          <path d="M5 12h14"></path>
          <path d="M12 5l7 7-7 7"></path>
        </svg>
      </a>
      <div class="text-center mt-2 leading-none flex justify-center absolute bottom-0 left-0 w-full py-4">
        <span class="text-gray-500 mr-3 inline-flex items-center leading-none text-sm pr-3 py-1 border-r-2 border-gray-700 border-opacity-50">
        <a href="${assignmentsArray[i].Code}" ></a>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><!--!Font Awesome Free 6.5.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2024 Fonticons, Inc.--><path d="M464 256A208 208 0 1 1 48 256a208 208 0 1 1 416 0zM0 256a256 256 0 1 0 512 0A256 256 0 1 0 0 256zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"/></svg>${assignmentsArray[i].Date}
        </span>
      </div>
    </div>
  </div>`
    assignList.innerHTML += div
}