// var loggedin_name = "";

function myFunc_fname(){
    let first_name = document.getElementById("first_name").value;
    let mandatory = document.getElementById("fname_mand"); 
    if(first_name.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_lname(){
    let last_name = document.getElementById("last_name").value;
    let mandatory = document.getElementById("lname_mand"); 
    if(last_name.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_mail(){
    let mail = document.getElementById("email").value;
    let mandatory = document.getElementById("mail_mand"); 
    if(mail.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_cmail(){
    let c_mail = document.getElementById("c_email").value;
    let mandatory = document.getElementById("cmail_mand"); 
    if(c_mail.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }
}
function myFunc_country() {
    let country = document.getElementById("country").value;
    let mandatory = document.getElementById("contry_mand"); 
    if(country == "empty"){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
function myFunc_pass() {
    let pass = document.getElementById("pass").value;
    let mandatory = document.getElementById("pass_mand"); 
    if(pass.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
function myFunc_cpass() {
    let cpass = document.getElementById("c_pass").value;
    let mandatory = document.getElementById("cpass_mand"); 
    if(cpass.length == 0){
     mandatory.setAttribute("style", "display:block");
    }else {
     mandatory.setAttribute("style", "display:none");
    }  
}
  


let hide1 = document.getElementById("hidding1");
let hide2 = document.getElementById("hidding2");
let hide3 = document.getElementById("hidding3");
let arrow1 = document.getElementById("acc_arrow");
arrow1.setAttribute("style", "background: rgb(0, 132, 189)")
let arrow2 = document.getElementById("pay_arrow");
let arrow3 = document.getElementById("review_arrow");


function signup(){
 
    // *************validation********* //
  
     let f_name = document.getElementById("first_name").value;
     let f_name_mand= document.getElementById("fname_mand"); 
     if(f_name.length == 0){
        f_name_mand.innerText="First name required";
        f_name_mand.setAttribute("style", "display:block");
     }else {
        f_name_mand.innerText="Required";
        f_name_mand.setAttribute("style", "display:none");
     }

     let l_name = document.getElementById("last_name").value;
     let l_name_mand = document.getElementById("lname_mand"); 
     if(l_name.length == 0){
      l_name_mand.innerText="Last name required";
      l_name_mand.setAttribute("style", "display:block");
     }else {
      l_name_mand.innerText="Required";
      l_name_mand.setAttribute("style", "display:none");
     }

     let mail = document.getElementById("email").value;
     let mail_mand = document.getElementById("mail_mand"); 
     if(mail.length == 0){
      mail_mand.innerText="Mail required"
      mail_mand.setAttribute("style", "display:block");
     }else {
      mail_mand.innerText="Required"
      mail_mand.setAttribute("style", "display:none");
     }

     let c_mail = document.getElementById("c_email").value;
     let c_mail_mand = document.getElementById("cmail_mand"); 
     if(c_mail.length == 0){
      c_mail_mand.innerText="Mail required"
      c_mail_mand.setAttribute("style", "display:block");
     }else if(c_mail !== mail) {
        c_mail_mand.innerText="Mail Mismatch";
        c_mail_mand.setAttribute("style", "display:block");
     }else {
        c_mail_mand.innerText="Required";
        c_mail_mand.setAttribute("style", "display:none");
     }

     let signup_pass = document.getElementById("pass").value;
     let pass_mand = document.getElementById("pass_mand"); 
     if(signup_pass.length == 0){
     pass_mand.innerText="Password required"
     pass_mand.setAttribute("style", "display:block");
     }else if(signup_pass.length < 8){
        pass_mand.innerText="Minimum password length 8";
        pass_mand.setAttribute("style", "display:block");
     }else {
        pass_mand.setAttribute("style", "display:none");
     }  
     
  
     let signup_Cpass = document.getElementById("c_pass").value;
     let cpass_mand = document.getElementById("cpass_mand"); 
     if(signup_Cpass.length == 0){
      cpass_mand.innerText="Password required"
      cpass_mand.setAttribute("style", "display:block");
     }else if(signup_Cpass !==  signup_pass){
        cpass_mand.innerText="Password Mismatch"
        cpass_mand.setAttribute("style", "display:block");
       }
     else {
        cpass_mand.innerText="Required"
      cpass_mand.setAttribute("style", "display:none");
     }  

    
      // *************validation********* //
      async function register(){
         try {
           let res = await fetch("http://localhost:5000/register",{
                 method:"POST",
                 body:JSON.stringify({
                  first_name:f_name,
                  last_name: l_name,
                  email: mail,
                  password: signup_pass,
     
                 }),
                 headers:{
                     "Content-Type":"application/json",
                 },
             });
              var data = await res.json();
              if(data.message){
               alert(data.message+" "+" plz login");
              }
              v(data)
         } catch (error) {
           console.log('error:', error)
         }
        }
        register();
     function v(data){
      if((!data.message) && (f_name.length != 0) && (l_name.length != 0) && (mail.length != 0) && (c_mail == mail) && (signup_pass != "") && (signup_pass == signup_Cpass)){
      
         hide1.setAttribute("style", "display: none");
         hide2.setAttribute("style", "display: block");
         arrow2.setAttribute("style", "background: rgb(0, 132, 189)");
         }
     }
  };

  function payment(){
  
     let card_name = document.getElementById("card_name").value;
      let card_name_mand= document.getElementById("cardnme_mand"); 
      if( card_name.length == 0){
          card_name_mand.setAttribute("style", "display:block");
       }else {
        card_name_mand.setAttribute("style", "display:none");
       }

    let card_nmbr = document.getElementById("card_nmbr").value;
       let card_nmbr_mand= document.getElementById("cardnmbr_mand"); 
       if( card_nmbr.length < 12){
           card_nmbr_mand.setAttribute("style", "display:block");
        }else if( card_nmbr.length > 12){
            card_nmbr_mand.innerText = "Invalid Number"
            card_nmbr_mand.setAttribute("style", "display:block");
         }else {
            card_nmbr_mand.innerText = "Required"
          card_nmbr_mand.setAttribute("style", "display:none");
         }

    let cvv_nmbr = document.getElementById("cvv_nmbr").value;
        let cvv_mand= document.getElementById("cvv_mand"); 
        if( cvv_nmbr.length < 3){
            cvv_mand.setAttribute("style", "display:block");
         }else if( cvv_nmbr.length > 3){
            cvv_mand.innerText = "Invalid CVV"
            cvv_mand.setAttribute("style", "display:block");
         }else {
            cvv_mand.innerText = "Required"
          cvv_mand.setAttribute("style", "display:none");
         }

      let address = document.getElementById("address").value;
       let address_mand= document.getElementById("address_mand"); 
        if( address.length == 0){
             address_mand.setAttribute("style", "display:block");
          }else {
           address_mand.setAttribute("style", "display:none");
          }

       let address1 = document.getElementById("address1").value;
          let address1_mand= document.getElementById("address1_mand"); 
           if( address1.length == 0){
                address1_mand.setAttribute("style", "display:block");
             }else {
              address1_mand.setAttribute("style", "display:none");
             }

        let card_month = document.getElementById("card_month").value;
        let card_year = document.getElementById("card_year").value;
          let date_mand= document.getElementById("date_mand"); 
           if( card_month == "" || card_year == "" ){
                date_mand.setAttribute("style", "display:block");
             }else {
              date_mand.setAttribute("style", "display:none");
             }

         let card_contry = document.getElementById("card_contry").value;
          let card_contry_mand= document.getElementById("card_contry_mand"); 
           if( card_contry == 0){
                card_contry_mand.setAttribute("style", "display:block");
             }else {
              card_contry_mand.setAttribute("style", "display:none");
             }

        let state = document.getElementById("state").value;
          let state_mand= document.getElementById("state_mand"); 
           if( state.length == 0){
                state_mand.setAttribute("style", "display:block");
             }else {
              state_mand.setAttribute("style", "display:none");
             }

        let city = document.getElementById("city").value;
          let city_mand= document.getElementById("city_mand"); 
           if( city.length == 0){
                city_mand.setAttribute("style", "display:block");
             }else {
              city_mand.setAttribute("style", "display:none");
             }

        let postal = document.getElementById("post_code").value;
             let post_mand= document.getElementById("post_mand"); 
             if( postal.length < 6){
                 post_mand.setAttribute("style", "display:block");
              }else if( postal.length > 6){
                 post_mand.innerText = "Invalid Postal Code"
                 post_mand.setAttribute("style", "display:block");
              }else {
                 post_mand.innerText = "Required"
               post_mand.setAttribute("style", "display:none");
              }

      
      if(localStorage.getItem("plural_payment") === null){
        localStorage.setItem(("plural_payment"), JSON.stringify([]));
      }
     
    if((card_name.length != 0) && (card_nmbr.length == 12) && (cvv_nmbr.length == 3) && (postal.length == 6) &&
        (address.length !=0) && (address1.length !=0) && (card_month != "") && (card_year !="") && (state.length != 0) && (city.length != 0)) {
       let payment_det ={
          card_name,
          card_nmbr,
          cvv_nmbr,
          card_month,
          card_year,
          city,
          state,
          postal,
       };
     
      let pay_array=JSON.parse(localStorage.getItem("plural_payment"));
     
      pay_array.push(payment_det); 
      localStorage.setItem(("plural_payment"), JSON.stringify(pay_array));     
       hide1.setAttribute("style", "display: none");
       hide2.setAttribute("style", "display: none");
       hide3.setAttribute("style", "display: block");
       arrow2.setAttribute("style", "background: rgb(0, 132, 189)");
       arrow3.setAttribute("style", "background: rgb(0, 132, 189)");
      }
  }




  function confirm_pay() {
      
  let last_btn = document.getElementById("btn_final");
  let hide_final = document.getElementById("hide_thanks");
     // alert("hello")
     last_btn.setAttribute("style","display:none");
     hide_final.setAttribute("style", "display: block");
    // location.href = "/pages/index.html";
    setTimeout(() => {
      window.location.href = "../homepage/index.html";
    },1000)
  }


  function closing_note(){
    let top_note =   document.getElementById("top_error"); 
    top_note.setAttribute("style", "display: none")
  }

