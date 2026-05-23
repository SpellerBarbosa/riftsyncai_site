export default defineEventHandler((event) => {
  // Clear the session cookie
  deleteCookie(event, 'admin_session', {
    path: '/'
  });

  return {
    success: true
  };
});
