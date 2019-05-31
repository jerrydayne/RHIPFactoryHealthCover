//Login
function loginFunction(e) {
    e.preventDefault();

  //  $.post('https://healthcover.herokuapp.com/login', {
      
    $.post('http://192.168.0.100:7221/login', {
            phoneNumber: $('#phoneNumber').val(),
            password: $('#password').val(),
        },
        function (response, status) {
            if (status === 'success') {
                
        if ($('#userType').val() === 'individual'){
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.data._id);
          localStorage.setItem('fullName', response.data.fullName);
          localStorage.setItem('userType', 'individual')
    console.log(localStorage)
    console.log($('#userType').val())
          return location.pathname = "dashBoard/userDB.html";
        } else if  ($('#userType').val() === 'hmo'){
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.data._id);
          localStorage.setItem('fullName', response.data.fullName);
          localStorage.setItem('userType', 'hmo')
          return location.pathname = "HMOdb/hmoDB.html";
        }
            }
        })

}

 //Registration
  function regFunction(e) {
    e.preventDefault();
    const sendObj = {
        fullName: `${$('#fName').val()} ${$('#lName').val()}`,
        phoneNumber: $('#phoneNumber').val(),
        password: $('#password').val(),
        
    }
    if($('#userType').val() === 'individual'){
      return(
        $.post('http://192.168.0.100:7221/user',
        sendObj,
        function (response, status) {
            let userData = response.data;
            if (userData) {
              localStorage.setItem('token', response.data);
                location.pathname = "/login.html";
            }
        }))
    }
    //console.log(sendObj);

    if($('#userType').val() === 'hmo'){
      return(
      $.post('http://192.168.0.100:7221/hmo',
        sendObj,
        function (response, status) {
            let userData = response.data;
            if (userData) {
              localStorage.setItem('token', response.data);
                location.pathname = "/login.html";
            }
        }))
    }
    console.log(Storage);
}

//CreatePlan
function createPlanFunction(e) {
  e.preventDefault();
  const sendObj = {
  planType: $('#planType').val(),
  summary: $('#summary').val(),
  feature: $('#feature').val(),
  benefit: $('#benefit').val(),
  exclusion: $('#exclusion').val(),
  priceNaira: $('#priceNaira').val(),
  priceDollar: $('#priceDollar').val(),
  hmo: localStorage.getItem('id')
  }
  console.log(sendObj);
      $.post('http://192.168.0.100:7221/plan',
      sendObj,
      function (response, status) {
          let userData = response.data;
         console.log('object', userData)


          // if (userData) {
          //   localStorage.setItem('token', response.data);
          //     location.pathname = "/healthPlans.html";
          // // };
         
          // }
      })
  }

  //getting HMO plan
  // var planHMO = new XMLHttpRequest();
  //     planHMO.open ('GET', `http://192.168.0.100:7221/getHMOPlan/5cf0f23c04e35a710dae1ecc`);

  //     planHMO.onreadystaechange = function (){
  //       var DONE = 4;
  //       var OK = 200;
  //       if (planHMO.readystate === DONE){
       
  //       //  document.getElementById('summary').innerHTML = 
  //         if(hmoPlan.status === OK){
  //           console.log(planHMO.responseText);
  //         } else {
  //           console.log('Error: ' + planHMO.status)
  //         }
  //       }
  //     };
  //   planHMO.send(null);



  $(document).ready(function (){
    $('#hmoID').val(localStorage.getItem('id'))
  })

  //display HMO
 
// function dashBoardFunction(e) {
//     e.preventDefault();
//     if (!localStorage.getItem('token')) {
//         location.pathname = "dashBoard/userDB.html";
//     }
//     console.log(localStorage.getItem('token'))
//     localStorage.removeItem('token')
// }
