import 'package:firebase_core/firebase_core.dart';
import 'package:flutter/foundation.dart';

Future initFirebase() async {
  if (kIsWeb) {
    await Firebase.initializeApp(
        options: FirebaseOptions(
            apiKey: "AIzaSyAJMVuTC0U3KGZ8Y8Z_eydSLwFcx0KjqKY",
            authDomain: "retailai-bff85.firebaseapp.com",
            projectId: "retailai-bff85",
            storageBucket: "retailai-bff85.appspot.com",
            messagingSenderId: "515965272178",
            appId: "1:515965272178:web:ca80754b7b88874d2b82eb",
            measurementId: "G-XFL8CVVH3K"));
  } else {
    await Firebase.initializeApp();
  }
}
