const children = [
  {
  "by": "BrandonM",
  "id": 9224,
  "kids": [
  9272
  ],
  "parent": 8863,
  "text": "I have a few qualms with this app:<p>1. For a Linux user, you can already build such a system yourself quite trivially by getting an FTP account, mounting it locally with curlftpfs, and then using SVN or CVS on the mounted filesystem.  From Windows or Mac, this FTP account could be accessed through built-in software.<p>2. It doesn't actually replace a USB drive.  Most people I know e-mail files to themselves or host them somewhere online to be able to perform presentations, but they still carry a USB drive in case there are connectivity problems.  This does not solve the connectivity issue.<p>3. It does not seem very \"viral\" or income-generating.  I know this is premature at this point, but without charging users for the service, is it reasonable to expect to make money off of this?",
  "time": 1175786214,
  "type": "comment"
  },
  {
  "by": "nickb",
  "id": 8952,
  "kids": [
  9153
  ],
  "parent": 8863,
  "text": "The only problem is that you have to install something. See, it's not the same as USB drive. Most corporate laptops are locked and you can't install anything on them. That's gonna be the problem. Also, another point where your USB comparison fails is that USB works in places where you don't have internet access. <p>My suggestion is to drop the \"Throw away your USB drive\" tag line and use something else... it will just muddy your vision.<p>Kudos for launching it!!! Launching/shipping is extremely hard and you pulled it off! Super!",
  "time": 1175727286,
  "type": "comment"
  },
  {
  "by": "brett",
  "id": 8917,
  "parent": 8863,
  "text": "This is genius. It's is problem everyone is having, and everyone knew it (<a href=\"http://www.aaronsw.com/weblog/lazybackup\">http://www.aaronsw.com/weblog/lazybackup</a> ). If it really works as well as it looks in that demo then they nailed it. I'm both envious and inspired. I'll be surprised if YC does not fund them. ",
  "time": 1175723293,
  "type": "comment"
  },
  {
  "by": "markovich",
  "id": 8887,
  "kids": [
  8889
  ],
  "parent": 8863,
  "text": "It's pretty nice, and I was thinking to myself - hey cool, I could make an online backup of my code. Then it occured to me - who the hell is this guy, and why should I trust my code to be on his server!?<p>That's a huge issue you should consider. Why would people feel comfortable leaving their valuable stuff on \"Drews\" server?",
  "time": 1175717593,
  "type": "comment"
  },
];

const mean = arr => arr.reduce( ( p, c ) => p + c, 0 ) / arr.length;
const wordCount = (someString) => (someString.trim().split(/\s+/).length);


const addChildren = (kids) => {
  return kids.map(kid => {
    return Object.assign({}, kid, {
      wordCount: wordCount(kid.text),
      documentSentiment: {
        score: .5,
        magnitude: 1.0
      }
    })
  });
};

export default function getFakeInitialState() {
  const kids = addChildren(children);
  const avgWordCount = mean(kids.map(kid => kid.wordCount));
  const avgSentiment = mean(kids.map(kid => kid.documentSentiment.score));
  const avgMagnitude = mean(kids.map(kid => kid.documentSentiment.magnitude));
  return {
    loading: false,
    errors: null,
    thread: {
      by: 'dhouston',
      descendants: 71,
      id: 8863,
      kids,
      score: 104,
      time: 1175714200,
      title: 'My YC app: Dropbox - Throw away your USB drive',
      type: 'story',
      url: 'http://www.getdropbox.com/u/2/screencast.html',
      avgWordCount,
      avgSentiment,
      avgMagnitude,

    },
  };
}
