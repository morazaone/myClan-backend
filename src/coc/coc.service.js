/**
 * Service Methods
 */

const getPublicMessage = () => {
  console.log('entered');

  return {
    message: "The API doesn't require an access token to share this message.",
  };
};


module.exports = {
  getPublicMessage
};
