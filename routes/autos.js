/*Modulos*/

const router = require("express") ;
const router = express.Router() ;

/*controllers*/

const Auto = require('../controllers/autos') ;

/*Comenzando la clase de Auto*/

const AutoController = new Auto() ;

router.get("/", async (req, res) => {
    try{
    const autos = await AutoController.allAuto();
    res.json(autos) ;
    } catch (err) {
        res.send(err)
    }
});

router.get('/start', async (req, res) => {
    try {
        await AutoController.start();
        const autos = await AutoController.allAuto();
        res.json(autos);
    } catch (err) {
        res.send(err);
    };
});

router.post("/", async (req,res)=> {
    try{
        await AutoController.addAuto(req.body) ;
        const autos = await AutoController.allAuto() ;
        res.json(autos);
    } catch (err) {
        res.send(err) ;
    };
});


module.exports = router ;