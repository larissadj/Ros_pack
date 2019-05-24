// keeping a pointer to the session is very useful!
var session;

// Function for the button "Schade"
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
 $(function () {
  $('#button1').click(sayHelloWorld1);
 }); 
 function changeTitle(data) {
  $('h1').text('Message received!')
 }
 function sayHelloWorld1() {
  session.service('ALBehaviorManager').then(function (tts) {  
    tts.runBehavior('.lastUploadedChoregrapheBehavior/elefant_imitieren');
 },
 function (error) {
    console.log(error);
  })
}
//disco_tanzen
// Function for the button "Spielen"
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button2').click(sayHelloWorld2);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld2() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/gorilla imitieren');
  },
 function (error) {
    console.log(error);
  })
}
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button3').click(sayHelloWorld3);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld3() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/maus_imitieren');
  },
//gitar_spielen
 function (error) {
    console.log(error);
  })
}
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button4').click(sayHelloWorld4);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld4() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/tai_chi_chuan_tanzen');
  },
 function (error) {
    console.log(error);
  })
}
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button5').click(sayHelloWorld5);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld5() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/headbang_tanzen');
  },
 function (error) {
    console.log(error);
  })
}
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button6').click(sayHelloWorld6);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }


 function sayHelloWorld6() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/disco_tanzen');
  },
 function (error) {
    console.log(error);
  })
}
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button7').click(sayHelloWorld7);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld7() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/gitar_spielen');
  },
 function (error) {
    console.log(error);
  })
}
try {
  QiSession( function (s) {
    console.log('connected!');
    session = s;
    // now that we are connected, we can use the buttons on the page
    $('button').prop('disabled', false);
    s.service('ALMemory').then(function (memory) {
      memory.subscriber('TouchChanged').then(function (subscriber) {
        subscriber.signal.connect(changeTitle);
      });
    });
  });
} catch (err) {
  console.log("Error when initializing QiSession: " + err.message);
  console.log("Make sure you load this page from the robots server.")
}

// click here
$(function () {
  $('#button8').click(sayHelloWorld8);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld8() {

    session.service('ALBehaviorManager').then(function (tts) {
      tts.runBehavior('.lastUploadedChoregrapheBehavior/saxofon_spielen');
  },
 function (error) {
    console.log(error);
  })
}
