var expect = require('chai').expect;
const game3rb = require('../../src/core/game3rb')

describe('- game3rb', async () => {
    it('getTop10Links', function (done) {
        game3rb.getTop10Links()
          .then((data) => {
            expect(data).to.be.an('array');
            expect(data.length).to.equal(10);
            done();
          }).catch((e) => {
            done(e);
          });
      })
    
      it('getDataByUrl', function (done) {
        let url = 'https://www.game3rb.com/satisfactory/';
        game3rb.getDataByUrl(url)
          .then((data) => {
            expect(data).to.be.an('array');
            expect(data).not.null;
            done();
          }).catch((e) => {
            done(e);
          });
      })
    
      it('filterData', function (done) {
        let data = [ 'Title: Download Satisfactory v0.3.0.1 build 114399 + Online',
        '',
        'Release name: Satisfactory\nSize: 7.06 GB',
        'Title: Satisfactory\nGenre: Action\nDeveloper: Epic Store\nPublisher: Epic Store\nRelease Date: 2019',
        '',
        'Satisfactory is a first-person open-world factory building game with a dash of exploration and combat. Pioneering for FICSIT Incorporated means charting and exploiting an alien planet, battling alien lifeforms, creating multi-story factories, entering conveyor belt heaven, automating vehicles, and researching new technologies.',
        'MINIMUM:',
        'CPU: i5-3570k 3,4 GHz 4 Core.\nOS: Windows 7 or later (64-Bit)\nVIDEO CARD: GTX 660 2GB.\nFREE DISK SPACE: 20 GB.\nDEDICATED VIDEO RAM: 2048 MB.',
        '1) Download the game using a Torrent program or Direct program\n2) After downloading the game, go to the downloaded game folder\n3) Extract the files with WinRar or 7-Zip\n4) Now start the installation with ” Setup.exe “, choose the directory to install\n5) Wait until the installation is complete\n6) Now just start the game as an administrator with the shortcut that was created on the desktop\n7) Play!',
        '1) Download Satisfactory_Fix_Repair_Epic\n2) Copy the content of this crack to your game folder\n3) Start Epic Store and login with your account (Download EPIC GAMES HERE)\n4) Run the game through the shortcut Satisfactory or EpicLauncher.exe , which is located in the folder with the game.\n5) In-game -> Connection : Join Game -> Connecting to a friend -> Playing!\nCreating a server : New Game -> Set up everything as you wish (set theSession Type to Friends Only) and clickStart Game-> Waiting for other players to connect -> Playing!\n6) Play & Enjoy !',
        'Interface language: English,Russian',
        '– Block the game’s exe in your firewall to prevent the game from\ntrying to go online ..\n– If you install games to your systemdrive, it may be necessary\nto run this game with admin privileges instead\n– Support the software developers and buy this game\nhttps://www.epicgames.com/store/en-US/product/satisfactory/home',
        '\n\t\t\t\t\t\t\tابرئ نفسي ، أمام الله و أمام جميع الزوار و الأعضاء ، على المقاطع التي تنشر في الموقع من مقطورات و مقاطع مخلة وسط  الألعاب و أنص على حذف الموسيقى في أي لعبة تم تحميلها من الموقع بالدخول إلى الإعدادات و خفض صوت الموسيقى نفس الشيئ بالنسبة للمقطورات  التي بها موسيقى . اللهم إني بلغت.\t\t\t\t\t\t' ]
        game3rb.filterData(data)
          .then((data) => {
            expect(data).to.be.an('array');
            expect(data.length).to.equal(5);
            expect(data).not.null;
            done();
          }).catch((e) => {
            done(e);
          });
      })

      it('convertDataToInfo', function (done) {
        let dataFiltered = [ 'Title: Satisfactory',
        'Genre: Action',
        'Developer: Epic Store',
        'Publisher: Epic Store',
        'Release Date: 2019' ];
        game3rb.convertDataToInfo(dataFiltered)
          .then((data) => {
            expect(data).to.be.an('object')
            expect(data.title).to.be.a('string');
            expect(data.genre).to.be.a('string');
            expect(data.releaseYear).to.be.a('string');
            expect(data.releaser).to.be.a('string');
            done();
          }).catch((e) => {
            done(e);
          });
      })
})