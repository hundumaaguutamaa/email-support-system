module.exports = (sequelize, Sequelize) => {
    const EmailTemplate = sequelize.define("emailTemplate", {
      subject: {
        type: Sequelize.STRING
      },
      body: {
        type: Sequelize.TEXT
      }
    });
    return EmailTemplate;
  };
  