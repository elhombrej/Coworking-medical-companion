const { Hand } = require("../db");

const getRightHand = async () => {
    return await Hand.findAll({
        include:{
            model: RightSide,
            attributes: ['condition'],
            through: {
                attributes: [],
            },
        }
    })
}

export default getRightHand;
