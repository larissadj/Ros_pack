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
  $('#say').click(sayHelloWorld2);
 }); 
 function changeTitle(data) {
  $('h1').text('Message received!')
 }
 function sayHelloWorld2() {
  session.service('ALBehaviorManager').then(function (tts) {
    //tts.runBehavior('.lastUploadedChoregrapheBehavior/tset');
    tts.runBehavior('.lastUploadedChoregrapheBehavior/spielprinzip_erklaeren');
    tts.runBehavior('.lastUploadedChoregrapheBehavior/spiel_drucktaster_finden');

  /*  setTimeout(function({
      window.location.href="../index2.html"; },
    3000);*/

   //session.service('ALTextToSpeech').then(function (tts) {

   //tts.say('Schade! Vielleicht können wir was anderes zusammen machen.');
   

 },
 function (error) {
    console.log(error);
  })
}
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
  $('#sa').click(sayHelloWorld);
});
  
 function changeTitle(data) {
  $('h2').text('Message received!')
 }

 function sayHelloWorld() {

    //session.service('ALBehaviorManager').then(function (tts) {
   // tts.runBehavior('.lastUploadedChoregrapheBehavior/spiel_variante2');
    //tts.runBehavior('.lastUploadedChoregrapheBehavior/bumper_druecken');
   // tts.runBehavior('.lastUploadedChoregrapheBehavior/bumper_druecken2');
    //tts.runBehavior('.lastUploadedChoregrapheBehavior/belohnung');
 

  session.service('ALTextToSpeech').then(function (tts) {
    tts.say('Schade! Vielleicht können wir was anderes zusammen machen.');
    //window.location.href="file:///home/fapsros/catkin_ws/src/pepper_tablet/pepper_samples/tablet_sample/html/index2.html";
    //window.location.href="/index2.html";
    /*setTimeout(function({
          window.location.href="../index2.html"; },
        3000);*/

// Ich verfüge über 3 Drucktaster. Für dieses Spiels werden wir aber zwei davon benötigen. Es ist einfach. Deine Aufgabe ist nur zu bestimmen, wo sich mein linker beziehungsweise mein rechter Drucktaster befinden und danach darauf zu drücken. Die Reihenfolge ist mir sehr wichtig. Als erstes soll der linke Bumper  gedrueckt werden. Danach soll der rechte gedrueckt werden. Jetzt können wir anfangen.

  },
 function (error) {
    console.log(error);
  })
}
