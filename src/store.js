import { createStore, combineReducers } from "redux"
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-async-storage/async-storage'
import threads from "./threads"

import groupchat from "../assets/group-chat.jpeg"
import larakety from "../assets/larakety.jpeg"
import laradino from "../assets/laradino.jpeg"
import leosaniya from "../assets/leosaniya.jpeg"
import larasaniya from "../assets/larasaniya.jpeg"
import leolara from "../assets/leolara.jpeg"

import uuid from 'react-native-uuid';


const createMessage = (text, user, groupId = 1, system = false, delay = 0) => ({
  _id: uuid.v4(),
  groupId: groupId,
  visible: false,
  enabled: false,
  text: text,
  createdAt: new Date(Date.now() + 1*60*1000),
  user: user,
  system,
  delay: delay || text.length * 40
})

const groupUser = (name) => ({
  _id: 2,
  name: name,
})


const lara = {
  _id: 2,
  name: 'Lara',
  avatar: 'https://placeimg.com/140/140/animals',
}

// reversed position
const lara_r = {
  _id: 1,
  name: 'Lara',
  avatar: 'https://placeimg.com/140/140/animals',
}

const kety = {
  _id: 1,
  name: 'Kety',
  avatar: 'https://placeimg.com/140/140/people',
}

// reversed position
const kety_r = {
  _id: 2,
  name: 'Kety',
  avatar: 'https://placeimg.com/140/140/people',
}

const dino = {
  _id: 1,
  name: 'Dino',
  avatar: 'https://placeimg.com/140/140/people',
}

const leo = {
  _id: 1,
  name: 'Leo',
  avatar: 'https://placeimg.com/140/140/people',
}

const leo_r = {
  _id: 2,
  name: 'Leo',
  avatar: 'https://placeimg.com/140/140/people',
}

const saniya = {
  _id: 2,
  name: 'Saniya',
  avatar: 'https://placeimg.com/140/140/people',
}

const saniya_r = {
  _id: 1,
  name: 'Saniya',
  avatar: 'https://placeimg.com/140/140/people',
}


const initialState = {
  //ordered by our story order
  qrCodes: [
    {
      id: "genesysCode",
      scanned: true
    },
    //Lara i kety
    {
      id: "M9GFw3MVbHPjTg",
      threadId: 1,
      groupId: 1,
      scanned: false,
    },
    // LAra i Dino
    {
      id: "v6GtPgpg7UHvy5",
      threadId: 2,
      groupId: 1,
      scanned: false,
    },
    // group chat
    {
      id: "dEvZCyi3tpdfLK",
      threadId: 3,
      groupId: 1,
      scanned: false,
    },
    // Lara i Kety 2. cin - Kod drugog kosa
    {
      id: "tcA8UJ7vjt7uZT",
      threadId: 1,
      groupId: 2,
      scanned: false,
    },
    // leo i saniya
    {
      id: "wK9mUJw7RdC9AG",
      threadId: 4,
      groupId: 1,
      scanned: false
    },
    // lara i saniya
    {
      id: "AGtCSebTrBt34E",
      threadId: 5,
      groupId: 1,
      scanned: false
    }, 

    // Leo i Lara - klupice
    {
      id: "nDBVvCn3avPdEF",
      threadId: 6,
      groupId: 1,
      scanned: false
    },

    // kety i dino - pizzeria
    {
      id: "yzNjj4WN7EpMTk",
      threadId: 7,
      groupId: 1,
      scanned: false
    },
    // group chat - ljuljacke
    {
      id: "zxxv4TUSoJ89Ta",
      threadId: 3,
      groupId: 1,
      scanned: false
    },
    // leo i saniya - dinamo
    {
      id: "kUr2Ny4LAiDu9d",
      threadId: 4,
      groupId: 2,
      scanned: false
    },
  ],
  threads: [
    {
      id: 1,
      visible: false,
      isGroupChat: false,
      title: "Lara i Kety", subtitle: "Kiosk",
      threadAvatar: larakety,
      messages: [
        {
          _id: uuid.v4(),
          groupId: 1,
          visible: false,
          enabled: false,
          text: '{system forwarded message}',
          createdAt: new Date(Date.now() + 1*60*1000),
          user: lara,
        },
        
        createMessage("Bok.\n\nImam loše vijesti za tebe.\n\nMoje ime je V.I.R.U.S. Ako si primio/la ovu poruku, službeno si zaražen/a.\n\nSamo je pitanje trenutka kad ćeš osjetiti zarazu i proširiti ju dalje. Ne brini, nisi me mogao/la spriječiti niti predvidjeti. Nevidljiv sam prostom ljudskom oku. To ne znači da ne postojim. Stvaran sam. Tu sam. Možda se (još) ne osjećaš tako, ali tu sam. Vjerojatno misliš da je ovo samo spam i/ili lažna uzbuna. To je normalno. Nitko ne voli dobiti V.I.R.U.S.\n\nNemoj ni pokušavati. Nemoguće me izbrisati. Jednom kad si primio/la ovu poruku, V.I.R.U.S. je već došao do tebe. Među vama sam, iako me ne želite. Nitko me neće izbjeći.\n\nTko preživi, pričat će.", lara, 1, false, 1),
        createMessage("???", lara),
        createMessage("jesi ti vidla ovo? neam pojma što je to. ugasila sam i upalila mob i niš. neće se maknut.", lara),
        createMessage("ne. wtf? što je to?", kety),
        createMessage("nznm. išla sam provjeriti poruke kad sam se probudila. i samo sam vidla ovo.", lara),
        createMessage("strah me da mi ne izbriše sve fotke s tuluma.", lara),
        createMessage("ili da mi ne izbriše poruke s dinom.", lara),
        createMessage("daj screenshotaj u grupu. možda je netko dobio isto.", kety),
        createMessage("ma šta si luda? pa da svi znaju da imam virus. nema šanse.", lara),
        createMessage("starci će me ubit. kupili su mi novi mob prije ravno tjedan dana.", lara),
        createMessage("jel ti stara skužila?", kety),
        createMessage("neeee. što ti je? da je skužila, sad ne bih spušila virus neg kaznu.", lara),
        createMessage("ostala sam do 5 budna i sve dekontaminirala.", lara),
        createMessage("😷", lara),
        createMessage("si se čula sa sanjom?", kety),
        createMessage("ne. zašto?", lara),
        createMessage("jel tebi ona bila malo čudna cijelu večer ili ja samo brijem?", lara),
        createMessage("ti ne znaš?", kety),
        createMessage("ne? daj, plašiš me.", lara),
        createMessage("ona ti se jučer zrigala pred pekarom!!", kety),
        createMessage("izašla je ona stara pekarica, ona s naboranim čelom i umjetnim pandžama, sve nam je opsovala po spisku.", kety),
        createMessage("neeeeeee!", lara),
        createMessage("daaaaa! dino ju je zgrabio za ruku, napravili smo takvu šturu. dino, leo, ja i sanja", kety),
        createMessage("bojala sam se da nas žive ne odere gospođa pekarica", kety),
        createMessage("🐅🐯", kety),
        createMessage("znaš kak je brza, nikad ne bi pogodila", kety),
        createMessage("koji ste vi kreteni.", lara),
        createMessage("😆🤣🤣", lara),
        createMessage("neću više nikad jesti tamo.",lara),

        createMessage("baš me zanima jel lokva još tamo", kety),
        createMessage("odvratna si.", lara),
        createMessage("🤮🤮", lara),
        createMessage("nemrem, odmah mi nije dobro.", lara),
        createMessage("ček, dino je bio s vama?", lara),
        createMessage("da. sreli smo ga kod pekare, slučajno.", kety),
        createMessage("weird. meni je reko da mu stari prijeti da mora doma.", lara),
        createMessage("ne odgovara mi na poruke.", lara),
        createMessage("sanja?", kety),
        createMessage("trebala si to vidjeti jučer. uopće nisam skužila da se ona tak napila.", kety),
        createMessage("ja sam brijala da ona ne pije.", kety),
        createMessage("neeee, dino.", lara),
        createMessage("ste vas dvoje okej?", kety),
        createMessage("pa brijem da da. jučer smo pričali.", lara),
        createMessage("ma mislim, nije niš strašno bilo. dino je sam takav. malo je živac.", lara),
        createMessage("pričali smo baš puno...", lara),
        createMessage("i iza toga mi je reko da mora ići doma jer ga stari pila.", lara),
        
        createMessage("e sori, brijem da čujem staru na vratima. moram ići.", lara),
        createMessage("🤗🤗", lara),

        /// drugi cin

        createMessage("!!!", kety, 2),
        createMessage("što je bilo?", lara, 2),
        createMessage("dobila sam virus. 😨😨", kety, 2),
        createMessage("stvarno? kad, što, gdje?", lara, 2),
        createMessage("al tebi niš nije bilo, jelda? možda ni meni neće biti niš.", kety, 2),
        createMessage("🤞🤞", lara, 2),
        createMessage("ok, što je najgore što se može desiti?", lara, 2),
        createMessage("ummmmm, dobijem ukor pred isključenje jer sam kupovala drogu u okrilju škole?", kety, 2),
        createMessage("nema šanse da je tebe netko vidio", lara, 2),
        createMessage("kupila si, što? možda dva puta od tome", lara, 2),
        createMessage("pusti virus, nemoj nikom niš ni reći, to je neš random 😉", lara, 2),
        createMessage("da... imaš pravo, skroz...", kety, 2),
        createMessage("vjv neće biti niš", kety, 2),
        createMessage("ma baš me briga za virus", kety, 2),
        createMessage("leo me ghosta i dalje 😭😭", kety, 2),
        createMessage("poslala sam mu poruku jel se ono desilo zbog virusa i samo mi je seenao", kety, 2),
        createMessage("to je dobar znak!!", lara, 2),
        createMessage("uhm?? 😵🤨", kety, 2),
        createMessage("e, ne bi ga to tolko povrijedilo što si ga zezala da je bio fat kid da mu nije stalo do tog što misliš", lara, 2),
        createMessage("logika! 👆", lara, 2),
        createMessage("osim toga, što niste vi zabrijali na tulumu?", lara, 2),
        createMessage("pa da", kety, 2),
        createMessage("i ne", kety, 2),
        createMessage("skoro", kety, 2),
        createMessage("poljubili smo se ko challenge", kety, 2),
        createMessage("meni je to izgledalo ful hot 😋💓💓", lara, 2),
        createMessage("daaa! i mislila sam da ćemo onda solo doma", kety, 2),
        createMessage("i da ćemo sjest na tribine poslije pekare", kety, 2),
        createMessage("i onda se saniya prikrpala 😡😡", kety, 2),
        createMessage("misliš da se on njoj sviđa? 😥", kety, 2),
        createMessage("leo i sanja?? 🤣🤣", lara, 2),
        createMessage("brijem da ne, što ne bi to bilo malo incest?", lara, 2),
        createMessage("nisam ti to htjela reć dok neš ne bude, al.......", lara, 2),
        createMessage("ajme, što je?! reci, reci, reci 😇", kety, 2),
        createMessage("leo ti je mene zaustavio kod wca na tulumu", lara, 2),
        createMessage("reko mi je da me mora neš pitati", lara, 2),
        createMessage("sigurno me neš htio pitati za mene jer zna da smo best", lara, 2),
        createMessage("al onda je došo dino i prepo se", lara, 2),
        createMessage("samo me tražio di sam stavila vodku", lara, 2),
        createMessage("omg! 🙉", kety, 2),
        createMessage("misliš da je to to?", kety, 2),
        createMessage("daaa! fkt ne znam što čekaš 😊", lara, 2),
        createMessage("nemrem više dočekat da se vas dvoje napokon spojite", lara, 2),
        createMessage("predugo traje ovaj film", lara, 2),
        createMessage("imam ideju, reci mu da ćemo se svi naći kod tribina, reci da je neš oko virusa 😈", lara, 2),
        createMessage("shit, virus", kety, 2),
        createMessage("na moment sam zaboravila 😰😰", kety, 2),
        createMessage("da ćemo biti svi", lara, 2),
        createMessage("i onda, ups, doći ćeš samo ti, i bit ćete solo 😙🙊", lara, 2),
        createMessage("ma daaaj, ne brini", lara, 2),
        createMessage("taj virus je glupost 😶", lara, 2),
        createMessage("što je najgore što se može desiti?", lara, 2),
        createMessage("ne želim ni razmišljat o tom 😱", kety, 2),
        createMessage("poslala sam ja leu poruku", lara, 2),
        createMessage("reko je da će doći", lara, 2),
        createMessage("ti nisi normalna! 🙈", kety, 2),
        createMessage("nema na čemu 💕", lara, 2),

        
      ]},
    {
      id: 2,
      visible: false,
      isGroupChat: false,
      title: "Lara i Dino", subtitle: "Pekara",
      threadAvatar: laradino,
      messages: [
        createMessage("hej, gle, znam da ti vjerojatno nije do nikog", lara),
        createMessage("al samo da znaš, ja sam tu...", lara),
        createMessage("💓", lara),
        createMessage("tenks. 🙏", dino),
        createMessage("kad nađem tog debila koji je to objavio...", dino),
        createMessage("ne zna što ga čeka...", dino),
        createMessage("ne kužim kak. ko ti je mogo hakirati profil?", lara),
        createMessage("to mi je ko iz filma.", lara),
        createMessage("ne znam, al ja nikad to ne bi objavio.", dino),
        createMessage("znam...", lara),
        createMessage("stara se prijeti da će otići iz stana.", dino),
        createMessage("ozbiljno? 🤯", lara),
        createMessage("da.", dino),
        createMessage("fakat ju ne krivim. debil ju je varao sa studenticom.", dino),
        createMessage("ta cura živi ulaz pored.", dino),
        createMessage("sori ak možda ne želiš pričat o tom...", lara),
        createMessage("al jel znaš možda tko ih je snimio?", lara),
        createMessage("ne znam. 🙄", dino),
        createMessage("vjerojatno isti bolesnik koji je to stavio na tiktok.", dino),
        createMessage("nemaš pojma tko bi to mogo bit?", lara),
        createMessage("ne. samo sam dobio tu neku poruku prije...", dino),
        createMessage("neki virus.", dino),
        createMessage("kak misliš virus? 😨", lara),
        createMessage('išla je poruka neš u stilu... "moje ime je virus. sad si zaražen. blabla"', dino),
        createMessage("ne sjećam se. zbrisao sam. mislio sam da je neka glupost.", dino),
        createMessage("i ček, iza toga ti je netko provalio u profil?", lara),
        createMessage("da. čim sam obriso poruku, mob mi se resetiro. mislio sam da je to to, da je crko. al ipak se upalio.", dino),
        createMessage("i onda mi je leo poslo poruku i skužio sam video...", dino),
        createMessage("aha, znači odmah poslije virus poruke je to bilo?", lara),
        createMessage("da, zaš?", dino),
        createMessage("ma samo pitam...", lara),
        createMessage("nznm, možda je to neki trag tko bi mogo bit?", lara),
        createMessage("nemrem vjerovat da ti je matej ono napravio u školi...", lara),
        createMessage("misliš da je on možda?", lara),
        createMessage("on je preglup za to...", dino),
        createMessage("to mora smislit netko ko nema propuh u vugla", dino),
        createMessage("jebiga, vidio mi je ku*** od starog ko i pol škole. to kaj je matej ljubomorna seljačina koju treba nabit je druga priča. 😡", dino),
        createMessage("...nisi ti niš kriv, znaš to?", lara),
        createMessage("stari ti je samo moron i to je to.", lara),
        createMessage("svejedno bi bilo super da nisu svi vidli kak mi stari praši studenticu u autu.", dino),
        createMessage("da, znam… 😓", lara),
        createMessage("lara, ti si jedina s kojom mogu pričat, a da se ne osjećam ko totalni jadnik...", dino),
        createMessage("kaj bi ja bez tebe? 💓💓", dino),
        createMessage("oćeš da se nađemo?", lara),
        createMessage(" gle, znam da te sad nije bilo par dana na kvartu... i kužim skroz...", lara),
        createMessage("DAAA, PLIZ! 🙏🙏", dino),
        createMessage("doma je groblje. ne znam kaj stari čeka. trebo je samo otići kod ljubavnice.", dino),
        createMessage("i pustit nas na miru.", dino),
        createMessage("lik se pokušava ponašat ko da se niš nije desilo. nemrem vjerovat.", dino),
        createMessage("kod garaža?", lara),
        createMessage("vidimo se. 😘😘😘", dino),
        
      ]},
    {
      id: 3,
      visible: false,
      isGroupChat: true,
      title: "Group chat", subtitle: "Garaže",
      threadAvatar: groupchat,
      messages: [
        createMessage("baš si bio kjut kad si bio tako bucibuci, Leo. jelda @Kety?", groupUser("Lara")),
        createMessage("daaaaa! 🙈🙈", groupUser("Kety")),
        createMessage("nemaš se što sramit. body shaming je so 2000 and late.", groupUser("Lara")),
        createMessage("@Leo jel to tvoja stara danas bila u školi?", groupUser("Dino")),
        createMessage("fuck! što su danas bile informacije? ", groupUser("Kety")),
        createMessage("ne, pa što nije rekla raska da ovaj tjedan neće držati informacije?", groupUser("Lara")),
        createMessage("stara mi je upravo rekla da sutra ne idemo u školu.", groupUser("Dino")),
        createMessage("😻🥳🥳", groupUser("Kety")),
        createMessage("kaj_se_događa??", groupUser("Lara")),
        createMessage("boje se da se virus širi po školi.", groupUser("Saniya")),
        createMessage("@Saniya kak znaš?", groupUser("Dino")),
        createMessage("Sanyich 👄", groupUser("Lara")),
        createMessage("tak sam čula...", groupUser("Saniya")),
        createMessage("lajkam ovaj virus ✌", groupUser("Dino")),
        createMessage("@Kety lako tebi reći kad ga nisi dobila…", groupUser("Dino")),
        createMessage("sori, dino. samo sam hepi jer imamo produljeni vikend.", groupUser("Kety")),
        createMessage("@Leo si tu?", groupUser("Lara")),
        createMessage("@Leo, sorkiii, malo smo se zezali... nismo niš loše mislile. 🙏🙏", groupUser("Lara")),
        createMessage("@Kety daj reci nešto da se ne ljuti", groupUser("Lara")),
        createMessage("Leo has left the group.", groupUser(""), 1, true), // system message
        createMessage("???", groupUser("Lara")),
        createMessage("jesam neš propustila? 😖", groupUser("Lara")),
        createMessage("rekla bi da mu baš nije drago što su te fotke na njegovom instagramu.", groupUser("Saniya")),
        createMessage("dobro, al... to je bilo prije sto godina. sad super izgleda.", groupUser("Kety")),
        createMessage("možda nismo trebale niš spominjati, Kety. fakat sam mislila da će mu biti lakše ak se malo našalimo. daj mu pošalji poruku, Kejt. reci mu da nam je baš žao.", groupUser("Lara")),
        createMessage("hoću. 💪💪", groupUser("Kety")),
        createMessage("danas ga je Matej dočeko s vrećicom iz Meka u svlačionici.", groupUser("Dino")),
        createMessage("netko ozbiljno treba reći Mateju da nema smisla za humor. 😤", groupUser("Lara")),
        createMessage("napiso mi je Leo da je slučajno izašo iz grupe.", groupUser("Saniya")),
        createMessage("tebi odg na poruke? 😶", groupUser("Kety")),
        createMessage("jeste vidli ovu poruku od raske u grupnom?", groupUser("Dino")),
        createMessage("ne??? 🙀", groupUser("Kety")),
        createMessage("(forwarded message)", groupUser("Dino")),
        createMessage("Dragi učenici/ce dobila sam nekoliko upita vezano uz sutrašnju nastavu i hoće li se održati. Ovim putem bih vas voljela sve obavijestiti da se evidentno proširila dezinformacija kako se sutra škola neće održati te kako se nastava odvija regularno po rasporedu. Do sljedećeg produljenog vikenda valja će se još malo strpiti. :) Pozdrav od Vaše raske.", groupUser("Dino")),
        createMessage(":( :( :(  malo plačem.", groupUser("Kety")),
        createMessage("lažna uzbuna?", groupUser("Lara")),
        createMessage("Saniya dodaje Leo u grupu.", groupUser("---"), 1, true),
        createMessage("hey @Leo! dobrodošao natrag!", groupUser("Kety")),
        createMessage("sori ljudi, neš sam slučajno stisnuo.", groupUser("Leo")),
        createMessage("ne brigaj. 💜", groupUser("Lara")),
        createMessage("zapratila sam ti novi profil na instagramu, @Leo 🔥🔥", groupUser("Katy")),
        createMessage("🔥🔥", groupUser("Leo")),
        createMessage("ljudi, nećete vjerovat... odite brzo na matejev profil!", groupUser("Lara")),
        createMessage("ček, što to nije Toma diler?", groupUser("Kety")),
        createMessage("o, shit.. 😐", groupUser("Dino")),
        createMessage("da!! netko je objavio Tomu i Mateja kod koša.", groupUser("Lara")),
        createMessage("o ne, pa tu unutra ima bar 5 grama...", groupUser("Kety")),
        createMessage("ima i slika kak puše zajedno.. i mateja s buntom para", groupUser("Lara")),
        createMessage("haha, oćemo mu sutra donijeti travu s livade u papiru i monopoly pare, @Leo? 😁", groupUser("Dino")),
        createMessage("kakav jazavac, tak mu i treba", groupUser("Dino")),
        createMessage("ovo se otima kontroli.", groupUser("Saniya")),
        createMessage("a kladio bi se da je Matej V.I.RU.S.", groupUser("Leo")),
        createMessage("ja sam isto mislila!! izgleda da ipak nije. 💁", groupUser("Lara")),
        createMessage("on je preglup za tako neš, ekipa. kae s vas dvoje?? malo više respecta prema virusu", groupUser("Dino")),
        createMessage("ovo nije dobro. Matej bi nešt mogo reći.", groupUser("Kety")),
        createMessage("lijepo sam vam rekao da ne trebate uzimati od Tome...", groupUser("Dino")),
        createMessage("ljudi, raska nešto piše u grupu 😕", groupUser("Saniya")),
        createMessage("ajme sad će nas sto posto neš pitati. zna da smo mi stalno na košarkaškom...", groupUser("Kety")),
        createMessage("svi nekad vise kod koševa. Chill.", groupUser("Dino")),
        createMessage("da, kety. bit će sve okej, ne brini.", groupUser("Lara")),
        createMessage("pazi se, kety, možda si ti sljedeća.", groupUser("Saniya")),
        createMessage("nemoj se ni šaliti s tim @Saniya. 😩", groupUser("Kety")),
        

        // 2. chin - Ljuljacke

        createMessage("ne kužim, vama je to oke? ljudi, možda ne idemo na maturalac!!", groupUser("Lara"), 2),
        createMessage("ja ovako i onako ne smijem ići, jeeej...", groupUser("Saniya"), 2),
        createMessage("ovaj virus je uništio baš sve.", groupUser("Kety"), 2),
        createMessage("debili, kakve veze imaju ravnateljeve afere s nama?", groupUser("Dino"), 2),
        createMessage("moramo neš napravit, trebamo skupit i ostale iz razreda", groupUser("Lara"), 2),
        createMessage("ma sve ljude iz svih razreda", groupUser("Lara"), 2),
        createMessage("ovo je ziher kršenje nekog prava", groupUser("Lara"), 2),
        createMessage("pa to su velike stvari, maturalca ćemo se sjećat cijeli život!", groupUser("Lara"), 2),
        createMessage("šalje poruku dora iz d razreda da su oni isto u šoku i preljuti", groupUser("Kety"), 2),
        createMessage('haha, slušaj ovo: "to kaj je ravnatelj mafija, ne znači da i meni može ukrast maturalac" 🤣🤣', groupUser("Kety"), 2),
        createMessage("dekači su rekli da će si to sprintat na majice", groupUser("Kety"), 2),
        createMessage("iskreno, ne znam kak vam se da...", groupUser("Leo"), 2),
        createMessage("nakon svega..", groupUser("Leo"), 2),
        createMessage("meni opće nije do maturalca 😓", groupUser("Leo"), 2),
        createMessage("puta dva", groupUser("Saniya"), 2),
        createMessage("baš zato, ne želim da nam ovaj virus upropasti cijelu godinu, sve", groupUser("Lara"), 2),
        createMessage("lara, sori što ti ovo moram reći..", groupUser("Saniya"), 2),
        createMessage("al ti si jedina koju ovaj virus nije napao 😴", groupUser("Saniya"), 2),
        createMessage("to ne znači da neće", groupUser("Lara"), 2),
        createMessage("svejedno, neću živjeti život u strahu", groupUser("Lara"), 2),
        createMessage("meni tak svejedno, ak nam cancelaju maturalac, nije najgora stvar u zadnje vrijeme 💩", groupUser("Leo"), 2),
        createMessage("kaj ste svi takve plačipičke??", groupUser("Dino"), 2),
        createMessage("mene virus sredio prvog pa kaj?", groupUser("Dino"), 2),
        createMessage("lara je u pravu, trebamo neš napravit", groupUser("Dino"), 2),
        createMessage("nemremo mi ispaštat zbog tog što je ravnatelj dilo s školskim parama 😠😠", groupUser("Dino"), 2),
        createMessage("još uvijek ne mogu vjerovat da se to događa...", groupUser("Kety"), 2),
        createMessage("ja zapravo mogu, uvijek je bio ljiga", groupUser("Saniya"), 2),
        createMessage("raska je sad poslala u grupu od razreda da se saziva hitni roditeljski", groupUser("Lara"), 2),
        createMessage("rekla je da svi koji imaju ili su imali virus da se obavezno jave ❗❗", groupUser("Lara"), 2),
        createMessage("ma nabijem i nju...", groupUser("Dino"), 2),
        createMessage("uvijek takva elokvencija, @Dinosaurus 😍", groupUser("Saniya"), 2),
        createMessage("da, nisi ti jedina pametna ovdje, sam da znaš @Saniya", groupUser("Dino"), 2),
        createMessage("chillax, ekipa", groupUser("Leo"), 2),
        createMessage("kaže dora da se oni nalaze na platou kod dinama", groupUser("Kety"), 2),
        createMessage("da će neš smislit kak da nagovore svog razrednika da idu", groupUser("Kety"), 2),
        createMessage("kaže da dođemo i mi", groupUser("Kety"), 2),
        createMessage("uzalud se trude, neće nikamo nitko ić dok se virus tako širi", groupUser("Saniya"), 2),
        createMessage("boje se što bi se moglo dogodit", groupUser("Saniya"), 2),
        createMessage("što može gore od ovog?", groupUser("Kety"), 2),
        createMessage("ak je do ravnatelja došlo...", groupUser("Kety"), 2),
        createMessage("uvijek može gore", groupUser("Leo"), 2),
        createMessage("ja ću se naći s dekačima, ko još ide?", groupUser("Lara"), 2),
        createMessage("ajmo, ljudi!!", groupUser("Dino"), 2),
        createMessage("@Lara znaš da sam ja uz tebe, bejbe 💓💓", groupUser("Dino"), 2),
        createMessage("ja ipak nemrem", groupUser("Kety"), 2),
        createMessage("Kejt? 😲😲", groupUser("Lara"), 2),
        createMessage("skupim te za 10 min, lara", groupUser("Dino"), 2),
        createMessage("a vi drugi kak oćete", groupUser("Dino"), 2),
      ]},
    // Tribine, Leo i Saniya
    {
      id: 4,
      visible: false,
      isGroupChat: false,
      title: "Leo i Saniya", subtitle: "Tribine",
      threadAvatar: leosaniya,
      messages: [
        createMessage("tenks što nisi nikom niš rekla", leo),
        createMessage("naravno!!", saniya),
        createMessage("to se stvarno njih ne tiče 💓",saniya),
        createMessage("stara me neće pustit na miru",leo),
        createMessage("sili me da bi trebo opet na terapiju",leo),
        createMessage("ne znam što da ti kažem",saniya),
        createMessage("e, nemoj me i ti sad",leo),
        createMessage("to je bilo predavno",leo),
        createMessage("znam! i sad si super, al razumijem ti mamu skroz",saniya),
        createMessage("bilo je baš gadno kad si završio na infuziji",saniya),
        createMessage("nije mi jasno kak je netko došo do tih slika",leo),
        createMessage("ne znam, sve je ovo tako čudno...",saniya),
        createMessage("to mora biti netko iz naše osnovne škole",leo),
        createMessage("ko bi drugi znao da sam prije bio.. to kaj sam bio?",leo),
        createMessage("ti nisi, dino nema šanse, kaj?, klara koja je u d razredu?",leo),
        createMessage("zaš bi ona to napravila?",leo),
        createMessage("tko još ima?",leo),
        createMessage("ne znam, sumnjam da je klara sposobna za tako nešto",saniya),
        createMessage("svaka čast ako je stigla hakirati profile pored dvije škole 😅😅",saniya),
        createMessage("dolaziš na tribine?",leo),
        createMessage("sad mi je lara poslala poruku",leo),
        createMessage("meni nitko nije niš poslao",saniya),
        createMessage("čudno 😕",leo),
        createMessage("pa i ne",saniya),
        createMessage("ni prvi ni zadnji put da me sijamske blizanke nisu negdje zvale",saniya),
        createMessage("osim toga, imam dogovor",saniya),
        createMessage("nemoj tako",leo),
        createMessage("sorry, sorry. zaboravljam da ti imaš ružičaste naočale za nekog… 🙄",saniya),
        createMessage("zaš joj samo ne kažeš?",saniya),
        createMessage("malo sam se napio kod nje na tulumu",leo),
        createMessage("bilo je blizu…",leo),
        createMessage("zaš mi to nisi reko?!",saniya),
        createMessage("jer nije niš bilo",leo),
        createMessage("dino je došo prije neg kaj sam neš reko",leo),
        createMessage("dino je bio baš čudan na tom tulumu...",saniya),
        createMessage("ma on i lara su se opet bili neš posvadili… 😪",leo),
        createMessage("dino mi je frend, al ne znam što njih dvoje rade skupa",leo),
        createMessage("leo, jesi već izašao?",saniya),
        createMessage("ne, spremam se..",leo),
        createMessage("zaš me to pitaš?",leo),
        createMessage("nisam sigurna da ćeš htjeti ići kad vidiš ketyin story",saniya),
        createMessage("ahahaha, nisam znala da ima takav pjesnički talent",saniya),
        createMessage("l for love, e for eternal, o for one and only",saniya),
        createMessage("o čem ti? 😒",leo),
        createMessage("nešto mi kaže da je kety dobila virus",saniya),
        createMessage("niš mi nije jasno 🤨🤨",leo),
        createMessage("sve će ti biti jasno kad vidiš story",saniya),
        createMessage("mislim da imaš tajnu obožavateljicu",saniya),
        createMessage("fuck… 😨",leo),
        createMessage("kaj da radim?",leo),
        createMessage("mene pitaš... nije meni kety izjavila ljubav upravo javno",saniya),
        createMessage("ne znam kog drugog, ti vidiš u matricu, kaj ne?",leo),
        createMessage("da bar...",saniya),
        createMessage("fuck, fuck! 💩",leo),
        createMessage("dobro, ja sam mislila da je tebi jasno koje su katarinine namjere",saniya),
        createMessage("ne",leo),
        createMessage("zaš mi nisi niš rekla? 😱",leo),
        createMessage("ti si zbilja naivan ako si mislio da su one sačekuše na uglu kod tobacca bile random 😳",saniya),
        createMessage("kaj da radim?! 😞",leo),
        createMessage("daj mi neki savjet",leo),
        createMessage("@Saniya",leo),
        createMessage("si tu?",leo),
        createMessage("hej, di si nestala? ",leo),
        createMessage("sad mi je dino napiso da on nije na kvartu. ne kužim? 😐",leo),
        createMessage("napiso sam da sam bolestan. da nemrem doći.",leo),
        createMessage("ha, misliš da će mi vjerovat? @Saniya",leo),
        createMessage("super... baš volim kad ovako ispariš...",leo),
        createMessage("...",leo),


        createMessage("ti vjeruješ tu priču?", leo_r,2),
        createMessage("ne, ali nimalo.", saniya_r,2),
        createMessage("kety mi je priznala da je ona prvo čula za virus od lare", saniya_r,2),
        createMessage("ne znam zašto bi mi to rekla, al..", saniya_r,2),
        createMessage("kaj? ti misliš da ovo ima veze s larom?", leo_r,2),
        createMessage("ne, zapravo ne.", saniya_r,2),
        createMessage("lara i ja možda više nismo tako dobre ko nekad, ali lara nije taj lik 😐", saniya_r,2),
        createMessage("malo mi je nevjerojatno da je sam tak snimio taj video i stavio onlajn", leo_r,2),
        createMessage("ma to nije mogo biti filip! 😑", saniya_r,2),
        createMessage("nisam sigurna da on ima opće naše brojeve", saniya_r,2),
        createMessage("zašto bi on to napravio?", saniya_r,2),
        createMessage("kakve on ima veze s dinom? tobom? sa mnom? mislim da čak je on čak vodio kampanju za prag umjesto barcelone", saniya_r,2),
        createMessage("nema smisla", saniya_r,2),
        createMessage("a kao, uvijek je onaj na kojeg najmanje sumnjaš...", leo_r,2),
        createMessage("klinac iz zadnje klupe", leo_r,2),
        createMessage("kety misli da je lara jer je ona jedina dobila virus i nije joj niš bilo 😦", saniya_r,2),
        createMessage("to JE čudno… 😟", leo_r,2),
        createMessage("ali ne može biti ona", leo_r,2),
        createMessage("100 nije ona", leo_r,2),
        createMessage("dobro, znamo zašto TI tako misliš… 🙄", saniya_r,2),
        createMessage("ne...", leo_r,2),
        createMessage("ne može biti ona jer ja znam nešto što nitko ne zna", leo_r,2),
        createMessage("ummm 🤨", saniya_r,2),
        createMessage("ne možeš mi sad ne reći, to ti je valjda jasno?", saniya_r,2),
        createMessage("ravnatelj je njezin tetak", leo_r,2),
        createMessage("ona ga nikad ne bi onako razotkrila", leo_r,2),
        createMessage("wooow 🙀🙀", saniya_r,2),
        createMessage("sad mi je jasno zašto bi onako stisko ruku dini", saniya_r,2),
        createMessage("a kako ti znaš?", saniya_r,2),
        createMessage("rekla mi je…", leo_r,2),
        createMessage("bilo ju je strah", leo_r,2),
        createMessage("a ti, jesi joj rekao?", saniya_r,2),
        createMessage("ne...", leo_r,2),
        createMessage("nonstop je pričala o kety i kako je ona super 😥😥", leo_r,2),
        createMessage("kako bi bili baš dobar par", leo_r,2),
        createMessage("stvarno ne znam što lara vidi u tom dini...", saniya_r,2),
        createMessage("nije ni ona savršena, al on je takav neandertalac", saniya_r,2),
        createMessage("sam ti rekla da sam ga na tulumu uhvatila kako joj kopa po sobi? 😵", saniya_r,2),
        createMessage("ne?", leo_r,2),
        createMessage("išla sam tražiti neku sobu gdje mogu biti solo", saniya_r,2),
        createMessage("trebala sam obaviti jedan poziv", saniya_r,2),
        createMessage("slučajno sam ga našla u larinoj sobi", saniya_r,2),
        createMessage("samog", saniya_r,2),
        createMessage("bio je baš čudan", saniya_r,2),
        createMessage("reko je da je izgubio mobitel", saniya_r,2),
        createMessage("al cijelo vrijeme ga je držao u ruci 😶", saniya_r,2),
        createMessage("bio je čudan cijeli tulum 😕", leo_r,2),
        createMessage("ja sam prvo mislio da je do cuge", leo_r,2),
        createMessage("al onda ga je kety pitala zaš ne pije i skužio sam da nije popio kap", leo_r,2),
        createMessage("jedno tri put mi je spomenuo kak njegov tata ima gun negdje u stanu 🐥🐥", leo_r,2),
        createMessage("i onda mi je poslije pričo kak mu se stari prijetio tipovima koji bi mu probali barit staru u klubu", leo_r,2),
        createMessage("i da on nikad ne bi bio tak glup da puca u nekog 🐽", leo_r,2),
        createMessage("da ima puno pametnijih načina kak nekom danas pokazat da imaš većeg", leo_r,2),
        createMessage("ti misliš da on zna? 😨", saniya_r,2),
        createMessage("pa prvo sam se usro da možda zna", leo_r,2),
        createMessage("al poslije, kad smo bili kod pekare, bio je ko uvijek sa mnom", leo_r,2),
        createMessage("sve normalno 🤷", leo_r,2),
        createMessage("sutra je izašla ta snimka njegovog starog", leo_r,2),
        createMessage("moro je biti čudan zbog tog, kaj ne?", leo_r,2),
        createMessage("kad si ti dobio poruku da si zaražen? 🤔", saniya_r,2),
        createMessage("išo sam s larom doma poslije škole", leo_r,2),
        createMessage("otpratio sam je, otišo do kioska po žvake i .. ", leo_r,2),
        createMessage("ja sam je dobila poslije testa iz matiše", saniya_r,2),
        createMessage("kad sam rekla lari da joj neću pomoć", saniya_r,2),
        createMessage("rekla sam joj da bi joj bilo bolje da malo misli i na školu za promjenu", saniya_r,2),
        createMessage("što ti je kety rekla?", leo_r,2),
        createMessage("niš, da misli da je to lara napravila jer je ljubomorna na nju 👌", saniya_r,2),
        createMessage("ljubomora na što?", leo_r,2),
        createMessage("nije mi htjela reć točno 🤷", saniya_r,2),
        createMessage("ne mogu vjerovat da bi to bila lara 😶", saniya_r,2),
        createMessage("nije bila lara", saniya_r,2),
        createMessage("mislim da znam tko je… 😐", saniya_r,2),
        createMessage("tko?", leo_r,2),
        createMessage("sanja?", leo_r,2),
        createMessage("si tu?", leo_r,2),
        createMessage("sanja, di si nestala? 😥😮", leo_r,2),
        createMessage("You can no longer send messages to this person.", leo_r, 2, true)
      ]},
    {
      id: 5,
      visible: false,
      isGroupChat: false,
      title: "Lara i Saniya", subtitle: "Na uglu",
      threadAvatar: larasaniya,
      messages: [
        createMessage("sanja, pliz, javi se", lara),
        createMessage("sanja, koji ti je? nemreš nam to radit.", lara),
        createMessage("e vidi, nije bed, nisi ti kriva", lara),
        createMessage("ajde se samo pliz javi, samo želimo znati da si okej..", lara),
        createMessage("@Saniya JAVI SE HITNO, UPRAVO ME ZVALA TVOJA STARA!", lara),
        createMessage("molim te, nemoj napravit neku glupost samo !!!", lara),
        createMessage("e, upravo sam lagala tvojoj staroj da si kod mene, al da ne želiš sad pričati", lara),
        createMessage("rekla je da joj se odmah javiš", lara),
        createMessage("inače će doći ovdje", lara),
        createMessage("@Saniya !!!!!!!!!!!!", lara),
        createMessage("sanja, nije takav big deal, nitko te ne optužuje za niš...", lara),
        createMessage("sad smo sreli lea, i on te traži isto", lara),
        createMessage("fkt se brinemo za tebe, sanja", lara),
        createMessage("mi smo svi uz tebe, fućkaš druge", lara),
        createMessage("mi te ne judgeamo opće, on je problem, ne ti", lara),
        createMessage("on je odrasla osoba, ej!", lara),
        createMessage("sanja, ne znam što da radim, tvoja stara opet zove", lara),
        createMessage("slušaj, sanja, leu je crko mob, reko je da te čeka na vašem mjestu", lara),
        createMessage("kod klupica", lara),
        createMessage("sanjči, oke, ovo je zadnja poruka. rekla sam tvojoj staroj istinu. nisam mogla više lagat jer ne mogu ovo imat na duši, ona se samo brine za tebe, sanja. al pusti sad to, boli te briga sad za njih. misli na sebe. na svoje frendove. mi fakat ne znam što bi da si ti neš napraviš. još nas tolko toga čeka. znam da više nismo bliske ko prije, ali pliz, sanja nitko ne želi da se ono ponovi... ne moramo pričati, samo reci živa sam. to je to.", lara),
        createMessage("oke, dino mi je sad poslao poruku da te vidio s leom. samo sam ti htjela reći da sam baš hepi zbog toga sanja. volimo te. 💓💓", lara),
        
      ]},
    {
      id: 6,
      visible: false,
      isGroupChat: false,
      title: "Leo i Lara", subtitle: "Klupice",
      threadAvatar: leolara,
      messages: [
        createMessage("hej...", leo_r),
        createMessage("samo sam ti htio reći da je bilo kul ono što si napravila za sanju", leo_r),
        createMessage("hej!!", lara_r),
        createMessage("nznam, ne osjećam se ko da nisam baš puno napravila", lara_r),
        createMessage("drago mi je da je ipak sve oke 🤗", lara_r),
        createMessage("jel joj znaju mama i tata?", lara_r),
        createMessage("a znaju...", leo_r),
        createMessage('drže sad sve po tiho dok se ne skuži što je točno bila "priroda odnosa" 😳', leo_r),
        createMessage("mislim, kolko tiho može biti kad je cijela škola vidjela fotku na insta", leo_r),
        createMessage("nemrem vjerovat koji pedofil 😡", lara_r),
        createMessage("dobro, pa nije on tolko stariji od nas", leo_r),
        createMessage("svejedno, profesor je?! Wtf??", lara_r),
        createMessage("ma ok, vjv nije bilo niš, to je samo glupa kava", leo_r),
        createMessage("al nitko to ne misli tako", lara_r),
        createMessage("izgleda ko da joj drži ruku", lara_r),
        createMessage("ne želim se petljati..", lara_r),
        createMessage("jel tebi neš rekla?", leo_r),
        createMessage("ne, niš. nije htjela pričati..", leo_r),
        createMessage("ja nisam pitao", leo_r),
        createMessage("samo mi je bilo drago da nije opet neš...", leo_r),
        createMessage("da, ofc!! 🙏", lara_r),
        createMessage("kaj radiš sad?", leo_r),
        createMessage("um, niš, fejlam ovu zadaću iz matiše 😞", lara_r),
        createMessage("oćeš ići prošetati flokija?", leo_r),
        createMessage("što je dino kod tebe?", lara_r),
        createMessage("ne, mislio sam ak ti se da sa mnom...", leo_r),
        createMessage("može", leo_r),
        createMessage("zapravo, super, baš te želim neš pitati 😊", lara_r),
        createMessage("oke, skupimo te ispred pizzerie", leo_r),
        createMessage("sounds good!", lara_r),
        createMessage("cya!", lara_r),
      ]
    },
    // Kety i Dino - Pizzeria
    {
      id: 7,
      visible: false,
      isGroupChat: false,
      title: "Kety i Dino", subtitle: "Pizzeria",
      messages: [
        createMessage("ej...", kety_r),
        createMessage("inače nisam takva osoba, al mislim da je fer da i ti ovo znaš", kety_r),
        createMessage("vidla sam lea i laru zajedno", kety_r),
        createMessage("bili su na ljuljama na malom dječjem", kety_r),
        createMessage("slučajno sam ih vidla iz auta", kety_r),
        createMessage("kaj briješ ti?", dino),
        createMessage("sigurna sam da su to bili oni jer mi se stari parkao skoro točno prek puta", kety_r),
        createMessage("leo nije pričo sa mnom kak je virus pustio onaj stori", kety_r),
        createMessage("ne znam, samo sam mislila da i ti trebaš znat", kety_r),
        createMessage("thx kaj si javila", dino),
        createMessage("??", kety_r),
        createMessage("dobro, nemoj niš reći da sam ti ja rekla.. 😕", kety_r),
        createMessage("ne želim da lara zna", kety_r),
        createMessage("ne brigaj ti niš", dino),
        createMessage("sve je pod kontrolom", dino),
        createMessage("što ti to znači? 🤨", kety_r),
        createMessage("hej, dino?", kety_r),
        createMessage("gle, vidim da si onlajn...", kety_r),
        createMessage("nemoj napravit samo neku glupost @Dinosaurus 🙄🙄", kety_r),
      ]
    },
  ]
}

const reducers = (state = initialState, action) => {
  switch (action.type) {

    case "ADD_NUMBER":
      return {
        ...state,
        count: state.count + action.number,
      }

    case "MARK_CODE_SCANNED":
      return {
        ...state,
        qrCodes: state.qrCodes.map(c => c.id === action.codeId ? {...c, scanned: true} : c),
        threads: state.threads.map(thread => thread.id === action.threadId ? 
          {...thread, 
           visible: true,
           messages: thread.messages.map(msg => msg.groupId === action.groupId ? {...msg, enabled: true} : msg)
          } 
          : thread)
      }

    case "SHOW_NEXT_MESSAGE":
      return {
        ...state,
        threads: state.threads.map(
          thread => thread.id === action.threadId ?
            {...thread,
              messages: thread.messages.map(msg => msg._id === action.msgId ? {...msg, visible: true} : msg)
            }
            : thread
        )
      }

    case "UNLOCK_ALL":
      return {
        ...state,
        threads: state.threads.map(
          thread => ({
            ...thread,
            messages: thread.messages.map(msg => ({...msg, visible: true})),
            visible: true,
          })
        )
      }

    case "RESET_STATE":
      return initialState

    default:
      return state

}}

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const persistedReducer = persistReducer(persistConfig, reducers)

export const storep = createStore(persistedReducer)
export const persistor = persistStore(storep)
//export const persistor = {}

export const store = createStore(reducers)
