// author(s):  Patrice-Morgan Ongoly
// version: 0.2.2
// last modified: Monday, July 2, 2018 12:32 EST
// description:

// required modules
var bodyParser = require('body-parser');
var express = require('express');
var WhichBrowser = require('which-browser');
// main application instance

var app = express();

// main application settings

var config = {
    PORT: process.env.PORT || 8008,
    DIRECTORY: [
        './',           /* 0 */
        './css',        /* 1 */
        './js',         /* 2 */
        './media/img',  /* 3*/
        './media/texture',  /* 4 */
        './media/sound',   /* 5 */
        './media/model',    /* 6 */
        './uploads',        /* 7 */
        './media/upload',       /* 8 */
        './board/',             /* 9 */
    ]
};

var deviceType = 'unknown';
let dir = config.DIRECTORY;

var io = require('socket.io').listen(app.listen(config.PORT, function(){
    console.log('connecting \n . \n .. \n ... \n .... \n ..... \n ------------------------------------------');
    console.log('    HOUSE OF VENUS, BENEFIT CORPORATION \n Reality Organizing Worldstream v 0.5.0 ');
    console.log('------------------------------------------');
    console.log(`[0] listening on port ${config.PORT}`);
    console.log('------------------------------------------');

}));

app.engine('html', require('ejs').renderFile);

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use(express.static('/'));

app.get('/', function(req, res){
    var result = new WhichBrowser(req.headers);
    console.log(result.toString());
    if(result.isType('desktop')){
        console.log('This is a desktop computer.');
        deviceType = 'desktop';
    }
    else{
        console.log('This is a mobile device.');
        deviceType = 'mobile';
    }

    res.render('row.html',{root: dir[0]});
});

/**/

app.get('/css/:stylesheet_id', function(req, res){
    let stylesheet_id = req.params.stylesheet_id;
    res.sendFile(stylesheet_id, {root: dir[1]});
});

app.get('/js/:script_id', function(req, res){
    var script_id = req.params.script_id;
    res.sendFile(script_id, {root: dir[2]});
});

app.get('/media/texture/:texture_id', function(req, res){
    var texture_id = req.params.texture_id;
    res.sendFile(texture_id, {root: dir[4]});
});

app.get('/media/img/:img_id', function(req, res){
    var img_id = req.params.img_id;
    res.sendFile(img_id, {root: dir[3]});
});

app.get('/media/sound/:sound_id', function(req, res){
    var sound_id = req.params.sound_id;
    res.sendFile(sound_id, {root: dir[5]});
});

app.get('/media/model/:model_id', function(req, res){
    var model_id = req.params.model_id;
    res.sendFile(model_id, {root: dir[6]});
});

app.get('/uploads/:upload_id', function(req, res){
    var upload_id = req.params.upload_id;
    res.sendFile(upload_id, {root: dir[7]});
});

io.sockets.on('connection', function(socket){
    console.log(`client connected at ${socket.id}`);
    //var conn = socket;

    // applicationClient sockets

    socket.on('disconnect', function(){
        console.log(`socket ${socket.id} disconnected.`);
    });
});
