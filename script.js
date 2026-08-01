function sendToWhatsApp(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;


    const phone =
        document.getElementById("phone").value;


    const service =
        document.getElementById("service").value;


    const date =
        document.getElementById("date").value;


    const message =
        document.getElementById("message").value;


    const whatsappMessage =
        "Hello Ember & Oak Café!" +
        "\n\n" +

        "Name: " +
        name +

        "\nPhone: " +
        phone +

        "\nBooking / Service: " +
        service +

        "\nPreferred Date: " +
        date +

        "\n\nMessage: " +
        message;


    /*
        REPLACE THIS NUMBER
        WITH THE BUSINESS'S
        REAL WHATSAPP NUMBER.

        Format:
        Country code + number
        No + sign
        No spaces
    */

    const whatsappNumber =
        "27115550123";


    const whatsappURL =
        "https://wa.me/" +
        whatsappNumber +
        "?text=" +
        encodeURIComponent(whatsappMessage);


    window.open(
        whatsappURL,
        "_blank"
    );

      }
