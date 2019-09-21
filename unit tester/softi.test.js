let SoftUniFy=require('./softi').SoftUniFy;
let assert=require('chai').assert;
let should=require('chai').should();
describe('describefirst',function () {
    it("first", function () {
        let soft = new SoftUniFy();
        should.exist(soft.allSongs);
        soft.allSongs.should.be.an('object');
    })

    describe('describesecond', function () {
        it("second", function () {
            let soft = new SoftUniFy();
            soft.downloadSong('ivan', 'azisiniq', 'haha');
            let song = `azisiniq - haha`;
            assert.equal(soft.allSongs['ivan']['songs'], song);
        })
        it("second", function () {
            let soft = new SoftUniFy();
            soft.downloadSong('ivan', 'azisiniq', 'haha');
            soft.downloadSong('ivan', 'az', 'ti');
            let song = `azisiniq - haha`;
            let array = [];
            array.push(song);
            let song2 = `az - ti`;
            array.push(song2);
            assert.equal(soft.allSongs['ivan']['songs'].join(" "), array.join(" "));
        })
    })

    describe('describethird', function () {
        it("third", function () {
            let soft = new SoftUniFy();
            let song = 'azis';
            soft.playSong(song);
            assert.equal(soft.playSong(song), `You have not downloaded a ${song} song yet. Use SoftUniFy's function downloadSong() to change that!`)
        })
        it("third", function () {
            let soft = new SoftUniFy();
            let song='azis';
            soft.downloadSong('ivan', 'azis', 'ti');
            soft.downloadSong('gergi', 't', 'e');
            let result='ivan:\n';
            result+="azis - ti\n";
      assert.equal(soft.playSong('azis'),result);
        })

    });
describe('describefe', function () {
    it("thirdfe", function () {
        let soft = new SoftUniFy();
       soft.downloadSong('azis','azise','hehe');
        soft.downloadSong('a','b','v');
        let result=`azise - hehe\n`;
        result+='b - v';
        assert.equal(soft.songsList,result);
    })
    it("thirdf", function () {
        let soft = new SoftUniFy();

        assert.equal(soft.songsList,'Your song list is empty');
    })
})
    describe('describefe', function () {
        it("thirdfe", function () {
            let soft = new SoftUniFy();
            soft.downloadSong('ivan','3','2');
            let input='petko';
            assert.equal(soft.rateArtist(input),`The ${input} is not on your artist list.`)
        })
    })

    });






