import user from '../reducers/user';
 
export const data = {
    profile: {
      id: 1,
      name: "Sidharth Mahajan",
      image:user.image,
      
        // "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.britannica.com%2Fbiography%2FChris-Hemsworth&psig=AOvVaw3feODZUGhHxppLpg2-K0Ya&ust=1687798795001000&source=images&cd=vfe&ved=0CBEQjRxqFwoTCLjy39Ly3v8CFQAAAAAdAAAAABAE",
      contacts: [
        {
          id: 2,
          name: "Hrithik Roshan",
          image:
            "https://starsunfolded.com/wp-content/uploads/2013/08/Hrithik-Roshan-Image.jpg",
          chatlog: [
            {
              text: "Hello brother,How are you ?",
              timestamp: "12:36 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Hrithik. What about you ?",
              timestamp: "12:37 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great, Sidharth.",
              timestamp: "1:00 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "lets meet",
              timestamp: "01:01 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Okay bro",
              timestamp: "01:05 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 3,
          name: "Disha Patani",
          image:"https://img.nowrunning.com/content/Artist/2018/disha-53688/stills/dishapatani_2024827.jpg",
            // "https://media.istockphoto.com/photos/portrait-of-a-confident-young-man-picture-id1141737652?b=1&k=20&m=1141737652&s=170667a&w=0&h=1Ni7irJ6VB9BXN7LbJIdNHP0h5EMoyJcRyvXl5_nzDs=",
          chatlog: [
            {
              text: "Hi",
              timestamp: "3:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Disha, What's about you ?",
              timestamp: "3:02 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great,Dear.",
              timestamp: "3:03 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Or maybe not, let me check something and call you. Give me sometime",
              timestamp: "3:30 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Where are you ?",
              timestamp: "4:00 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 4,
          name: "Sonam Bajwa",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPS3SZZhOU_QbcsA5EkH951s7cOuIPGmgC9Vdfl9VK0yR83z8YUrBuq87o97cKMDtQxr8&usqp=CAU",
          chatlog: [
            {
              text: "Hi Sidharth,!",
              timestamp: "4:30 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I am fine Sonam. What about you!",
              timestamp: "04:32 PM",
              sender: "me",
              message_id: 2,
            },
            {
              text: "I am great ,  Sidharth.",
              timestamp: "04:40 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Are you busy?",
              timestamp: "04:45 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: " no",
              timestamp: "04:50 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 5,
          name: "Kylie",
          image:
            "https://www.the-sun.com/wp-content/uploads/sites/6/2022/10/MF-Kylie-Height-OFFPLAT.jpg?strip=all&quality=100&w=1080&h=1080&crop=1",
          chatlog: [],
        },
        {
          id: 6,
          name: "Kendal",
          image:
            "https://www.lorealparisusa.com/-/media/project/loreal/brand-sites/oap/americas/us/articles/kendall-jenner-new-loreal-paris-ambassador/vignettes-_spoke_4.jpg?w=1170&rev=44a9579a59f74b73ae2dc7e6c92580d9&hash=E3A1847E412F1001C6C9503535F16EA64D008ED8",
          chatlog: [
            {
              text: "Hey Sidharth, where is your friend, Justin?",
              timestamp: "05:00 PM",
              sender: "user",
              message_id: 1,
            },
            {
              text: "I don't know bro!",
              timestamp: "05:01 PM", 
              sender: "me",
              message_id: 2,
            },
            {
              text: "Are you sure, Sidharth ?.",
              timestamp: "05:05 PM",
              sender: "user",
              message_id: 3,
            },
            {
              text: "Yes bro, I am damn sure",
              timestamp: "05:07 PM",
              sender: "me",
              message_id: 4,
            },
            {
              text: "All right Kendal",
              timestamp: "05:09 PM",
              sender: "me",
              message_id: 5,
            },
          ],
        },
        {
          id: 7,
          name: "Virat Kohli",
          image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRt3j8EJOCiCpWPIwaNvBqp0BuCSKD8s-iGOw&s",
          chatlog: [
            {
              text: "Where are you bro ?",
              timestamp: "7:00 PM",
              sender: "me",
              message_id: 1,
            },
            {
              text: "I'm in Market now",
              timestamp: "07:07 PM",
              sender: "user",
              message_id: 2,
            },
            {
              text: "call me ASAP",
              timestamp: "07:07 PM",
              sender: "me",
              message_id: 3,
            },
            {
              text: "ok",
              timestamp: "07:09 PM",
              sender: "user",
              message_id: 4,
            },
            {
              text: "Is everything fine ?",
              timestamp: "07:10 PM",
              sender: "me",
              message_id: 5,
            },
            {
              text: "Yeah !!",
              timestamp: "07:12 PM",
              sender: "user",
              message_id: 6,
            },
          ],
        },
        {
          id: 8,
          name: "Mrunal Thakur",
          image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQseac3NNVQggwFYIclTU_K1JrULPjNIkEt9w&s",
            // "https://global-uploads.webflow.com/5d121ce15cf154f8f7d91740/5fb7e016798aa0ccca2ca0ba_Abhishek%20Dwivedi.jpg",
          chatlog: [],
        },
        {
          id: 9,
          name: "Sidharth Malhotra",
          image:
            "https://img.indiaforums.com/person/480x360/1/1081-sidharth-malhotra.jpg?c=8oL172",
          chatlog: [],
        },
      ],
    },
  };