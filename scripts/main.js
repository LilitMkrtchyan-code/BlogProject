function createLoginHeader() {
   const header = UI.createElement(
     "header",
     { class: "header" },
     UI.createElement(
       "div",
       { class: "root-container" },
       UI.createElement(
         "div",
         {
           class:
             "header-content d-flex justify-content-between align-items-center",
         },
         [
           UI.createElement("h1", { class: "title" }, "Blog Post"),
           UI.createElement("div", { class: "navigation d-flex" }, [
             UI.createElement(
               "a",
               {
                 href: "home.html",
                 class: "navigation-link first--link f-w-500 t-center",
               },
               "Home"
             ),
             UI.createElement(
               "a",
               {
                 href: "userData.html",
                 class: "navigation-link f-w-500 t-center",
               },
               "Sign Up"
             ),
           ]),
         ]
       )
     )
   );
   return header;
 }
 
 function createLoginForm() {
   const loginForm = UI.createElement(
     "div",
     {
       class:
         "form-wrapper d-flex justify-content-center align-items-center h-100",
     },
     UI.createElement("form", { class: "login-form d-flex" }, [
       UI.createElement("div", { class: "input-group" }, [
         UI.createElement("input", {
           id: "user-name",
           class: "w-100",
           type: "text",
           placeholder: "User name...",
           required: "",
         }),
         UI.createElement("input", {
           id: "user-password",
           class: "w-100",
           type: "password",
           placeholder: "Password...",
           required: "",
         }),
       ]),
       UI.createElement(
         "div",
         { class: "btn-content t-center" },
         UI.createElement(
           "button",
           { class: "btn f-w-500", type: "submit" },
           "Log in"
         )
       ),
     ])
   );
   return loginForm;
 }
 
 function createLoginLayout() {
   const page = UI.createElement("div", { class: "page d-flex" }, [
     createLoginHeader(),
     createLoginForm(),
   ]);
   UI.render(page, document.body);
 }
 createLoginLayout();
 
 function validateLoginForm() {
   const loginError = document.createElement("div");
   loginError.innerText = "Invalid email or password.";
   loginError.classList.add("login-error", "t-center");
   loginError.style.display = "none";
 
   const loginForm = document.querySelector(".login-form");
 
   loginForm.addEventListener("submit", function (event) {
     event.preventDefault();
 
     const inputLoginValue = document.querySelector("#user-name").value.trim();
     const inputPassValue = document
       .querySelector("#user-password")
       .value.trim();
 
     if (inputLoginValue.includes("@") && inputPassValue.length >= 6) {
       window.location.href = "home.html";
     } else {
       loginError.style.display = "block";
       if (!loginError.parentElement) {
         loginForm.prepend(loginError);
       }
     }
   });
 }
 validateLoginForm();
 