//Login
function loginFunction(e) {
    e.preventDefault();

  //  $.post('https://healthcoverapi.herokuapp.com/login', {
    $.post('http://localhost:7122/login', {
            phoneNumber: $('#phoneNumberL').val(),
            password: $('#passwordL').val(),
        },
        function (response, status) {
          console.log(status)
            if (status === 'success') {
                
        if ($('#userTypeL').val() === 'user'){ //login as individual User
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.data._id);
          localStorage.setItem('fullName', response.data.fullName);
          localStorage.setItem('userType', 'user')
          console.log($('#userType').val())
          return location.pathname = "dashBoard/userDB.html";
        } else if  ($('#userTypeL').val() === 'hmo'){ //login as HMO
          console.log(response)
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.data._id);
          localStorage.setItem('fullName', response.data.fullName);
          localStorage.setItem('userType', 'hmo')
          return location.pathname = "HMOdb/hmoDB.html";
        } else if  ($('#userTypeL').val() === 'hcp'){ //login as HCP
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.data._id);
          localStorage.setItem('fullName', response.data.fullName);
          localStorage.setItem('userType', 'hcp')
          return location.pathname = "HCPdb/HCPDB.html";
        } else if  ($('#userTypeL').val() === 'mha'){ //login as MHA
          localStorage.setItem('token', response.token);
          localStorage.setItem('id', response.data._id);
          localStorage.setItem('fullName', response.data.fullName);
          localStorage.setItem('userType', 'mha')
          return location.pathname = "MHAdb/MHADB.html";
        }
            }
        })
        console.log(localStorage);

}

 //Registration
  function regFunction(e) {
    e.preventDefault();
    const sendObj = {
        fullName: `${$('#fName').val()} ${$('#lName').val()}`,
        phoneNumber: $('#phoneNumber').val(),
        password: $('#password').val(),
    }

    //signup as individual user
    if($('#userType').val() === 'user'){
      return(
       // $.post('https://healthcoverapi.herokuapp.com/user',
        $.post('http://localhost:7122/user',
        sendObj,
        function (response, status) {
            let userData = response.data;
            if (userData) {
              localStorage.setItem('token', response.data);
              localStorage.setItem('id', response.data._id);
              localStorage.setItem('userType', 'user')
              location.pathname = "/regOk.html";
            }
        }))
    }

    //signup as HMO
    if($('#userType').val() === 'hmo'){
      return(
      //$.post('https://healthcoverapi.herokuapp.com/hmo',
      $.post('http://localhost:7122/hmo',
        sendObj,
        function (response, status) {
            let userData = response.data;
            if (userData) {
              localStorage.setItem('token', response.data);
              localStorage.setItem('id', response.data._id);
              localStorage.setItem('userType', 'hmo')
              location.pathname = "/regOk.html";
            }
        }))
    }
    console.log(Storage);

    //signup as HCP
    if($('#userType').val() === 'hcp'){
      return(
      //$.post('https://healthcoverapi.herokuapp.com/hcp',
      $.post('http://localhost:7122/hcp',
        sendObj,
        function (response, status) {
            let userData = response.data;
            if (userData) {
              localStorage.setItem('token', response.data);
              localStorage.setItem('id', response.data._id);
              localStorage.setItem('userType', 'hcp')
              location.pathname = "/regOk.html";
            }
        }))
    }

    //signup as MHA
    if($('#userType').val() === 'mha'){
      return(
     // $.post('https://healthcoverapi.herokuapp.com/mha',
      $.post('http://localhost:7122/mha',
        sendObj,
        function (response, status) {
            let userData = response.data;
            if (userData) {
              localStorage.setItem('token', response.data);
              localStorage.setItem('id', response.data._id);
              localStorage.setItem('userType', 'mha')
              location.pathname = "/regOk.html";
            }
        }))
    }

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
  aboutUs: $('#aboutUs').val(),
  priceNaira: $('#priceNaira').val(),
  priceDollar: $('#priceDollar').val(),
  hmo: localStorage.getItem('id')
  }
  console.log(sendObj);
      //$.post('https://healthcoverapi.herokuapp.com/plan',
      $.post('http://localhost:7122/plan',
      sendObj,
      function (response, status) {
          let userData = response.data;
         console.log('object', userData)
      })
  }

  //edit User Profile
function editUserProfileFunction(e) {
  e.preventDefault();
  const sendObj = {
  planType: $('#planType').val(),
  summary: $('#summary').val(),
  feature: $('#feature').val(),
  benefit: $('#benefit').val(),
  exclusion: $('#exclusion').val(),
  aboutUs: $('#aboutUs').val(),
  priceNaira: $('#priceNaira').val(),
  priceDollar: $('#priceDollar').val(),
  user: localStorage.getItem('id')
  }
  console.log(sendObj);
      //$.post('https://healthcoverapi.herokuapp.com/plan',
      $.post('http://localhost:7122/plan',
      sendObj,
      function (response, status) {
          let userData = response.data;
         console.log('object', userData)
      })
  }


  $(document).ready(function (){
    $('#hmoID').val(localStorage.getItem('id'))
  })

