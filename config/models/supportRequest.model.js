module.exports = (sequelize, Sequelize) => {
    const SupportRequest = sequelize.define("supportRequest", {
      description: {
        type: Sequelize.STRING
      },
      assignedTeam: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.STRING
      }
    });
    return SupportRequest;
  };
  