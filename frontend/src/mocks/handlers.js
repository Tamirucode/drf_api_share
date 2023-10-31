import { rest } from "msw";

const baseURL = "https://drf-todo2023-76af1f9fdada.herokuapp.com/";

export const handlers = [
  rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
    return res(
        ctx.json({
            "pk": 4,
             "username": "Hymanote",
             "email": "",
             "first_name": "",
             "last_name": "",
             "profile_id": 4,
             "profile_image": "https://res.cloudinary.com/dfezyx4ne/image/upload/v1/media/images/default_profile_pcfhix.jpg"
          
        })
      );
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req, res, ctx) => {
      return res(ctx.status(200));
    }),
  ];
   