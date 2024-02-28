// const BASE_URL = "https://server.bacaaku.com";
const BASE_URL = "http://localhost:3000";

export const registerUser = (registerForm) => {
  return async (dispatch, state) => {
    console.log(registerForm,"actionform")
      try {
          const response = await fetch(`${BASE_URL}/register-user`,{
              method: 'POST',
              body: JSON.stringify(registerForm),
              headers: {
                  'Content-Type': 'application/json',
              }
          });
          const result = await response.json()
          return result
      } catch (error) {
        console.log(error,"error")
        throw error;
      }
  }
}

export const loginUser = (formLogin) => {
    return async (dispatch, state) => {
      console.log(formLogin)
      try {
        const response = await fetch(`${BASE_URL}/login-user`, {
          method: 'POST',
          body: JSON.stringify(formLogin),
          headers: {
            'Content-Type': 'application/json',
          },
        });
  
        if (!response.ok) {
          const errorResponse = await response.json();
          throw errorResponse;
        }
  
        const result = await response.json();
        return result;
      } catch (error) {
        throw error;
      }
    };
  };