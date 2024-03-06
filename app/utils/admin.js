const adminEmails = ['admin@example.com', 'anotheradmin@example.com'];

export const isAdminEmail = (email) => {
    return adminEmails.includes(email);
  };