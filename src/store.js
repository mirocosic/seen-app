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
        
        createMessage("Bok.\n\nImam lo??e vijesti za tebe.\n\nMoje ime je V.I.R.U.S. Ako si primio/la ovu poruku, slu??beno si zara??en/a.\n\nSamo je pitanje trenutka kad ??e?? osjetiti zarazu i pro??iriti ju dalje. Ne brini, nisi me mogao/la sprije??iti niti predvidjeti. Nevidljiv sam prostom ljudskom oku. To ne zna??i da ne postojim. Stvaran sam. Tu sam. Mo??da se (jo??) ne osje??a?? tako, ali tu sam. Vjerojatno misli?? da je ovo samo spam i/ili la??na uzbuna. To je normalno. Nitko ne voli dobiti V.I.R.U.S.\n\nNemoj ni poku??avati. Nemogu??e me izbrisati. Jednom kad si primio/la ovu poruku, V.I.R.U.S. je ve?? do??ao do tebe. Me??u vama sam, iako me ne ??elite. Nitko me ne??e izbje??i.\n\nTko pre??ivi, pri??at ??e.", lara, 1, false, 1),
        createMessage("???", lara),
        createMessage("jesi ti vidla ovo? neam pojma ??to je to. ugasila sam i upalila mob i ni??. ne??e se maknut.", lara),
        createMessage("ne. wtf? ??to je to?", kety),
        createMessage("nznm. i??la sam provjeriti poruke kad sam se probudila. i samo sam vidla ovo.", lara),
        createMessage("strah me da mi ne izbri??e sve fotke s tuluma.", lara),
        createMessage("ili da mi ne izbri??e poruke s dinom.", lara),
        createMessage("daj screenshotaj u grupu. mo??da je netko dobio isto.", kety),
        createMessage("ma ??ta si luda? pa da svi znaju da imam virus. nema ??anse.", lara),
        createMessage("starci ??e me ubit. kupili su mi novi mob prije ravno tjedan dana.", lara),
        createMessage("jel ti stara sku??ila?", kety),
        createMessage("neeee. ??to ti je? da je sku??ila, sad ne bih spu??ila virus neg kaznu.", lara),
        createMessage("ostala sam do 5 budna i sve dekontaminirala.", lara),
        createMessage("????", lara),
        createMessage("si se ??ula sa sanjom?", kety),
        createMessage("ne. za??to?", lara),
        createMessage("jel tebi ona bila malo ??udna cijelu ve??er ili ja samo brijem?", lara),
        createMessage("ti ne zna???", kety),
        createMessage("ne? daj, pla??i?? me.", lara),
        createMessage("ona ti se ju??er zrigala pred pekarom!!", kety),
        createMessage("iza??la je ona stara pekarica, ona s naboranim ??elom i umjetnim pand??ama, sve nam je opsovala po spisku.", kety),
        createMessage("neeeeeee!", lara),
        createMessage("daaaaa! dino ju je zgrabio za ruku, napravili smo takvu ??turu. dino, leo, ja i sanja", kety),
        createMessage("bojala sam se da nas ??ive ne odere gospo??a pekarica", kety),
        createMessage("????????", kety),
        createMessage("zna?? kak je brza, nikad ne bi pogodila", kety),
        createMessage("koji ste vi kreteni.", lara),
        createMessage("????????????", lara),
        createMessage("ne??u vi??e nikad jesti tamo.",lara),

        createMessage("ba?? me zanima jel lokva jo?? tamo", kety),
        createMessage("odvratna si.", lara),
        createMessage("????????", lara),
        createMessage("nemrem, odmah mi nije dobro.", lara),
        createMessage("??ek, dino je bio s vama?", lara),
        createMessage("da. sreli smo ga kod pekare, slu??ajno.", kety),
        createMessage("weird. meni je reko da mu stari prijeti da mora doma.", lara),
        createMessage("ne odgovara mi na poruke.", lara),
        createMessage("sanja?", kety),
        createMessage("trebala si to vidjeti ju??er. uop??e nisam sku??ila da se ona tak napila.", kety),
        createMessage("ja sam brijala da ona ne pije.", kety),
        createMessage("neeee, dino.", lara),
        createMessage("ste vas dvoje okej?", kety),
        createMessage("pa brijem da da. ju??er smo pri??ali.", lara),
        createMessage("ma mislim, nije ni?? stra??no bilo. dino je sam takav. malo je ??ivac.", lara),
        createMessage("pri??ali smo ba?? puno...", lara),
        createMessage("i iza toga mi je reko da mora i??i doma jer ga stari pila.", lara),
        
        createMessage("e sori, brijem da ??ujem staru na vratima. moram i??i.", lara),
        createMessage("????????", lara),

        /// drugi cin

        createMessage("!!!", kety, 2),
        createMessage("??to je bilo?", lara, 2),
        createMessage("dobila sam virus. ????????", kety, 2),
        createMessage("stvarno? kad, ??to, gdje?", lara, 2),
        createMessage("al tebi ni?? nije bilo, jelda? mo??da ni meni ne??e biti ni??.", kety, 2),
        createMessage("????????", lara, 2),
        createMessage("ok, ??to je najgore ??to se mo??e desiti?", lara, 2),
        createMessage("ummmmm, dobijem ukor pred isklju??enje jer sam kupovala drogu u okrilju ??kole?", kety, 2),
        createMessage("nema ??anse da je tebe netko vidio", lara, 2),
        createMessage("kupila si, ??to? mo??da dva puta od tome", lara, 2),
        createMessage("pusti virus, nemoj nikom ni?? ni re??i, to je ne?? random ????", lara, 2),
        createMessage("da... ima?? pravo, skroz...", kety, 2),
        createMessage("vjv ne??e biti ni??", kety, 2),
        createMessage("ma ba?? me briga za virus", kety, 2),
        createMessage("leo me ghosta i dalje ????????", kety, 2),
        createMessage("poslala sam mu poruku jel se ono desilo zbog virusa i samo mi je seenao", kety, 2),
        createMessage("to je dobar znak!!", lara, 2),
        createMessage("uhm?? ????????", kety, 2),
        createMessage("e, ne bi ga to tolko povrijedilo ??to si ga zezala da je bio fat kid da mu nije stalo do tog ??to misli??", lara, 2),
        createMessage("logika! ????", lara, 2),
        createMessage("osim toga, ??to niste vi zabrijali na tulumu?", lara, 2),
        createMessage("pa da", kety, 2),
        createMessage("i ne", kety, 2),
        createMessage("skoro", kety, 2),
        createMessage("poljubili smo se ko challenge", kety, 2),
        createMessage("meni je to izgledalo ful hot ????????????", lara, 2),
        createMessage("daaa! i mislila sam da ??emo onda solo doma", kety, 2),
        createMessage("i da ??emo sjest na tribine poslije pekare", kety, 2),
        createMessage("i onda se saniya prikrpala ????????", kety, 2),
        createMessage("misli?? da se on njoj svi??a? ????", kety, 2),
        createMessage("leo i sanja?? ????????", lara, 2),
        createMessage("brijem da ne, ??to ne bi to bilo malo incest?", lara, 2),
        createMessage("nisam ti to htjela re?? dok ne?? ne bude, al.......", lara, 2),
        createMessage("ajme, ??to je?! reci, reci, reci ????", kety, 2),
        createMessage("leo ti je mene zaustavio kod wca na tulumu", lara, 2),
        createMessage("reko mi je da me mora ne?? pitati", lara, 2),
        createMessage("sigurno me ne?? htio pitati za mene jer zna da smo best", lara, 2),
        createMessage("al onda je do??o dino i prepo se", lara, 2),
        createMessage("samo me tra??io di sam stavila vodku", lara, 2),
        createMessage("omg! ????", kety, 2),
        createMessage("misli?? da je to to?", kety, 2),
        createMessage("daaa! fkt ne znam ??to ??eka?? ????", lara, 2),
        createMessage("nemrem vi??e do??ekat da se vas dvoje napokon spojite", lara, 2),
        createMessage("predugo traje ovaj film", lara, 2),
        createMessage("imam ideju, reci mu da ??emo se svi na??i kod tribina, reci da je ne?? oko virusa ????", lara, 2),
        createMessage("shit, virus", kety, 2),
        createMessage("na moment sam zaboravila ????????", kety, 2),
        createMessage("da ??emo biti svi", lara, 2),
        createMessage("i onda, ups, do??i ??e?? samo ti, i bit ??ete solo ????????", lara, 2),
        createMessage("ma daaaj, ne brini", lara, 2),
        createMessage("taj virus je glupost ????", lara, 2),
        createMessage("??to je najgore ??to se mo??e desiti?", lara, 2),
        createMessage("ne ??elim ni razmi??ljat o tom ????", kety, 2),
        createMessage("poslala sam ja leu poruku", lara, 2),
        createMessage("reko je da ??e do??i", lara, 2),
        createMessage("ti nisi normalna! ????", kety, 2),
        createMessage("nema na ??emu ????", lara, 2),

        
      ]},
    {
      id: 2,
      visible: false,
      isGroupChat: false,
      title: "Lara i Dino", subtitle: "Pekara",
      threadAvatar: laradino,
      messages: [
        createMessage("hej, gle, znam da ti vjerojatno nije do nikog", lara),
        createMessage("al samo da zna??, ja sam tu...", lara),
        createMessage("????", lara),
        createMessage("tenks. ????", dino),
        createMessage("kad na??em tog debila koji je to objavio...", dino),
        createMessage("ne zna ??to ga ??eka...", dino),
        createMessage("ne ku??im kak. ko ti je mogo hakirati profil?", lara),
        createMessage("to mi je ko iz filma.", lara),
        createMessage("ne znam, al ja nikad to ne bi objavio.", dino),
        createMessage("znam...", lara),
        createMessage("stara se prijeti da ??e oti??i iz stana.", dino),
        createMessage("ozbiljno? ????", lara),
        createMessage("da.", dino),
        createMessage("fakat ju ne krivim. debil ju je varao sa studenticom.", dino),
        createMessage("ta cura ??ivi ulaz pored.", dino),
        createMessage("sori ak mo??da ne ??eli?? pri??at o tom...", lara),
        createMessage("al jel zna?? mo??da tko ih je snimio?", lara),
        createMessage("ne znam. ????", dino),
        createMessage("vjerojatno isti bolesnik koji je to stavio na tiktok.", dino),
        createMessage("nema?? pojma tko bi to mogo bit?", lara),
        createMessage("ne. samo sam dobio tu neku poruku prije...", dino),
        createMessage("neki virus.", dino),
        createMessage("kak misli?? virus? ????", lara),
        createMessage('i??la je poruka ne?? u stilu... "moje ime je virus. sad si zara??en. blabla"', dino),
        createMessage("ne sje??am se. zbrisao sam. mislio sam da je neka glupost.", dino),
        createMessage("i ??ek, iza toga ti je netko provalio u profil?", lara),
        createMessage("da. ??im sam obriso poruku, mob mi se resetiro. mislio sam da je to to, da je crko. al ipak se upalio.", dino),
        createMessage("i onda mi je leo poslo poruku i sku??io sam video...", dino),
        createMessage("aha, zna??i odmah poslije virus poruke je to bilo?", lara),
        createMessage("da, za???", dino),
        createMessage("ma samo pitam...", lara),
        createMessage("nznm, mo??da je to neki trag tko bi mogo bit?", lara),
        createMessage("nemrem vjerovat da ti je matej ono napravio u ??koli...", lara),
        createMessage("misli?? da je on mo??da?", lara),
        createMessage("on je preglup za to...", dino),
        createMessage("to mora smislit netko ko nema propuh u vugla", dino),
        createMessage("jebiga, vidio mi je ku*** od starog ko i pol ??kole. to kaj je matej ljubomorna selja??ina koju treba nabit je druga pri??a. ????", dino),
        createMessage("...nisi ti ni?? kriv, zna?? to?", lara),
        createMessage("stari ti je samo moron i to je to.", lara),
        createMessage("svejedno bi bilo super da nisu svi vidli kak mi stari pra??i studenticu u autu.", dino),
        createMessage("da, znam??? ????", lara),
        createMessage("lara, ti si jedina s kojom mogu pri??at, a da se ne osje??am ko totalni jadnik...", dino),
        createMessage("kaj bi ja bez tebe? ????????", dino),
        createMessage("o??e?? da se na??emo?", lara),
        createMessage(" gle, znam da te sad nije bilo par dana na kvartu... i ku??im skroz...", lara),
        createMessage("DAAA, PLIZ! ????????", dino),
        createMessage("doma je groblje. ne znam kaj stari ??eka. trebo je samo oti??i kod ljubavnice.", dino),
        createMessage("i pustit nas na miru.", dino),
        createMessage("lik se poku??ava pona??at ko da se ni?? nije desilo. nemrem vjerovat.", dino),
        createMessage("kod gara??a?", lara),
        createMessage("vidimo se. ????????????", dino),
        
      ]},
    {
      id: 3,
      visible: false,
      isGroupChat: true,
      title: "Group chat", subtitle: "Gara??e",
      threadAvatar: groupchat,
      messages: [
        createMessage("ba?? si bio kjut kad si bio tako bucibuci, Leo. jelda @Kety?", groupUser("Lara")),
        createMessage("daaaaa! ????????", groupUser("Kety")),
        createMessage("nema?? se ??to sramit. body shaming je so 2000 and late.", groupUser("Lara")),
        createMessage("@Leo jel to tvoja stara danas bila u ??koli?", groupUser("Dino")),
        createMessage("fuck! ??to su danas bile informacije? ", groupUser("Kety")),
        createMessage("ne, pa ??to nije rekla raska da ovaj tjedan ne??e dr??ati informacije?", groupUser("Lara")),
        createMessage("stara mi je upravo rekla da sutra ne idemo u ??kolu.", groupUser("Dino")),
        createMessage("????????????", groupUser("Kety")),
        createMessage("kaj_se_doga??a??", groupUser("Lara")),
        createMessage("boje se da se virus ??iri po ??koli.", groupUser("Saniya")),
        createMessage("@Saniya kak zna???", groupUser("Dino")),
        createMessage("Sanyich ????", groupUser("Lara")),
        createMessage("tak sam ??ula...", groupUser("Saniya")),
        createMessage("lajkam ovaj virus ???", groupUser("Dino")),
        createMessage("@Kety lako tebi re??i kad ga nisi dobila???", groupUser("Dino")),
        createMessage("sori, dino. samo sam hepi jer imamo produljeni vikend.", groupUser("Kety")),
        createMessage("@Leo si tu?", groupUser("Lara")),
        createMessage("@Leo, sorkiii, malo smo se zezali... nismo ni?? lo??e mislile. ????????", groupUser("Lara")),
        createMessage("@Kety daj reci ne??to da se ne ljuti", groupUser("Lara")),
        createMessage("Leo has left the group.", groupUser(""), 1, true), // system message
        createMessage("???", groupUser("Lara")),
        createMessage("jesam ne?? propustila? ????", groupUser("Lara")),
        createMessage("rekla bi da mu ba?? nije drago ??to su te fotke na njegovom instagramu.", groupUser("Saniya")),
        createMessage("dobro, al... to je bilo prije sto godina. sad super izgleda.", groupUser("Kety")),
        createMessage("mo??da nismo trebale ni?? spominjati, Kety. fakat sam mislila da ??e mu biti lak??e ak se malo na??alimo. daj mu po??alji poruku, Kejt. reci mu da nam je ba?? ??ao.", groupUser("Lara")),
        createMessage("ho??u. ????????", groupUser("Kety")),
        createMessage("danas ga je Matej do??eko s vre??icom iz Meka u svla??ionici.", groupUser("Dino")),
        createMessage("netko ozbiljno treba re??i Mateju da nema smisla za humor. ????", groupUser("Lara")),
        createMessage("napiso mi je Leo da je slu??ajno iza??o iz grupe.", groupUser("Saniya")),
        createMessage("tebi odg na poruke? ????", groupUser("Kety")),
        createMessage("jeste vidli ovu poruku od raske u grupnom?", groupUser("Dino")),
        createMessage("ne??? ????", groupUser("Kety")),
        createMessage("(forwarded message)", groupUser("Dino")),
        createMessage("Dragi u??enici/ce dobila sam nekoliko upita vezano uz sutra??nju nastavu i ho??e li se odr??ati. Ovim putem bih vas voljela sve obavijestiti da se evidentno pro??irila dezinformacija kako se sutra ??kola ne??e odr??ati te kako se nastava odvija regularno po rasporedu. Do sljede??eg produljenog vikenda valja ??e se jo?? malo strpiti. :) Pozdrav od Va??e raske.", groupUser("Dino")),
        createMessage(":( :( :(  malo pla??em.", groupUser("Kety")),
        createMessage("la??na uzbuna?", groupUser("Lara")),
        createMessage("Saniya dodaje Leo u grupu.", groupUser("---"), 1, true),
        createMessage("hey @Leo! dobrodo??ao natrag!", groupUser("Kety")),
        createMessage("sori ljudi, ne?? sam slu??ajno stisnuo.", groupUser("Leo")),
        createMessage("ne brigaj. ????", groupUser("Lara")),
        createMessage("zapratila sam ti novi profil na instagramu, @Leo ????????", groupUser("Katy")),
        createMessage("????????", groupUser("Leo")),
        createMessage("ljudi, ne??ete vjerovat... odite brzo na matejev profil!", groupUser("Lara")),
        createMessage("??ek, ??to to nije Toma diler?", groupUser("Kety")),
        createMessage("o, shit.. ????", groupUser("Dino")),
        createMessage("da!! netko je objavio Tomu i Mateja kod ko??a.", groupUser("Lara")),
        createMessage("o ne, pa tu unutra ima bar 5 grama...", groupUser("Kety")),
        createMessage("ima i slika kak pu??e zajedno.. i mateja s buntom para", groupUser("Lara")),
        createMessage("haha, o??emo mu sutra donijeti travu s livade u papiru i monopoly pare, @Leo? ????", groupUser("Dino")),
        createMessage("kakav jazavac, tak mu i treba", groupUser("Dino")),
        createMessage("ovo se otima kontroli.", groupUser("Saniya")),
        createMessage("a kladio bi se da je Matej V.I.RU.S.", groupUser("Leo")),
        createMessage("ja sam isto mislila!! izgleda da ipak nije. ????", groupUser("Lara")),
        createMessage("on je preglup za tako ne??, ekipa. kae s vas dvoje?? malo vi??e respecta prema virusu", groupUser("Dino")),
        createMessage("ovo nije dobro. Matej bi ne??t mogo re??i.", groupUser("Kety")),
        createMessage("lijepo sam vam rekao da ne trebate uzimati od Tome...", groupUser("Dino")),
        createMessage("ljudi, raska ne??to pi??e u grupu ????", groupUser("Saniya")),
        createMessage("ajme sad ??e nas sto posto ne?? pitati. zna da smo mi stalno na ko??arka??kom...", groupUser("Kety")),
        createMessage("svi nekad vise kod ko??eva. Chill.", groupUser("Dino")),
        createMessage("da, kety. bit ??e sve okej, ne brini.", groupUser("Lara")),
        createMessage("pazi se, kety, mo??da si ti sljede??a.", groupUser("Saniya")),
        createMessage("nemoj se ni ??aliti s tim @Saniya. ????", groupUser("Kety")),
        

        // 2. chin - Ljuljacke

        createMessage("ne ku??im, vama je to oke? ljudi, mo??da ne idemo na maturalac!!", groupUser("Lara"), 2),
        createMessage("ja ovako i onako ne smijem i??i, jeeej...", groupUser("Saniya"), 2),
        createMessage("ovaj virus je uni??tio ba?? sve.", groupUser("Kety"), 2),
        createMessage("debili, kakve veze imaju ravnateljeve afere s nama?", groupUser("Dino"), 2),
        createMessage("moramo ne?? napravit, trebamo skupit i ostale iz razreda", groupUser("Lara"), 2),
        createMessage("ma sve ljude iz svih razreda", groupUser("Lara"), 2),
        createMessage("ovo je ziher kr??enje nekog prava", groupUser("Lara"), 2),
        createMessage("pa to su velike stvari, maturalca ??emo se sje??at cijeli ??ivot!", groupUser("Lara"), 2),
        createMessage("??alje poruku dora iz d razreda da su oni isto u ??oku i preljuti", groupUser("Kety"), 2),
        createMessage('haha, slu??aj ovo: "to kaj je ravnatelj mafija, ne zna??i da i meni mo??e ukrast maturalac" ????????', groupUser("Kety"), 2),
        createMessage("deka??i su rekli da ??e si to sprintat na majice", groupUser("Kety"), 2),
        createMessage("iskreno, ne znam kak vam se da...", groupUser("Leo"), 2),
        createMessage("nakon svega..", groupUser("Leo"), 2),
        createMessage("meni op??e nije do maturalca ????", groupUser("Leo"), 2),
        createMessage("puta dva", groupUser("Saniya"), 2),
        createMessage("ba?? zato, ne ??elim da nam ovaj virus upropasti cijelu godinu, sve", groupUser("Lara"), 2),
        createMessage("lara, sori ??to ti ovo moram re??i..", groupUser("Saniya"), 2),
        createMessage("al ti si jedina koju ovaj virus nije napao ????", groupUser("Saniya"), 2),
        createMessage("to ne zna??i da ne??e", groupUser("Lara"), 2),
        createMessage("svejedno, ne??u ??ivjeti ??ivot u strahu", groupUser("Lara"), 2),
        createMessage("meni tak svejedno, ak nam cancelaju maturalac, nije najgora stvar u zadnje vrijeme ????", groupUser("Leo"), 2),
        createMessage("kaj ste svi takve pla??ipi??ke??", groupUser("Dino"), 2),
        createMessage("mene virus sredio prvog pa kaj?", groupUser("Dino"), 2),
        createMessage("lara je u pravu, trebamo ne?? napravit", groupUser("Dino"), 2),
        createMessage("nemremo mi ispa??tat zbog tog ??to je ravnatelj dilo s ??kolskim parama ????????", groupUser("Dino"), 2),
        createMessage("jo?? uvijek ne mogu vjerovat da se to doga??a...", groupUser("Kety"), 2),
        createMessage("ja zapravo mogu, uvijek je bio ljiga", groupUser("Saniya"), 2),
        createMessage("raska je sad poslala u grupu od razreda da se saziva hitni roditeljski", groupUser("Lara"), 2),
        createMessage("rekla je da svi koji imaju ili su imali virus da se obavezno jave ??????", groupUser("Lara"), 2),
        createMessage("ma nabijem i nju...", groupUser("Dino"), 2),
        createMessage("uvijek takva elokvencija, @Dinosaurus ????", groupUser("Saniya"), 2),
        createMessage("da, nisi ti jedina pametna ovdje, sam da zna?? @Saniya", groupUser("Dino"), 2),
        createMessage("chillax, ekipa", groupUser("Leo"), 2),
        createMessage("ka??e dora da se oni nalaze na platou kod dinama", groupUser("Kety"), 2),
        createMessage("da ??e ne?? smislit kak da nagovore svog razrednika da idu", groupUser("Kety"), 2),
        createMessage("ka??e da do??emo i mi", groupUser("Kety"), 2),
        createMessage("uzalud se trude, ne??e nikamo nitko i?? dok se virus tako ??iri", groupUser("Saniya"), 2),
        createMessage("boje se ??to bi se moglo dogodit", groupUser("Saniya"), 2),
        createMessage("??to mo??e gore od ovog?", groupUser("Kety"), 2),
        createMessage("ak je do ravnatelja do??lo...", groupUser("Kety"), 2),
        createMessage("uvijek mo??e gore", groupUser("Leo"), 2),
        createMessage("ja ??u se na??i s deka??ima, ko jo?? ide?", groupUser("Lara"), 2),
        createMessage("ajmo, ljudi!!", groupUser("Dino"), 2),
        createMessage("@Lara zna?? da sam ja uz tebe, bejbe ????????", groupUser("Dino"), 2),
        createMessage("ja ipak nemrem", groupUser("Kety"), 2),
        createMessage("Kejt? ????????", groupUser("Lara"), 2),
        createMessage("skupim te za 10 min, lara", groupUser("Dino"), 2),
        createMessage("a vi drugi kak o??ete", groupUser("Dino"), 2),
      ]},
    // Tribine, Leo i Saniya
    {
      id: 4,
      visible: false,
      isGroupChat: false,
      title: "Leo i Saniya", subtitle: "Tribine",
      threadAvatar: leosaniya,
      messages: [
        createMessage("tenks ??to nisi nikom ni?? rekla", leo),
        createMessage("naravno!!", saniya),
        createMessage("to se stvarno njih ne ti??e ????",saniya),
        createMessage("stara me ne??e pustit na miru",leo),
        createMessage("sili me da bi trebo opet na terapiju",leo),
        createMessage("ne znam ??to da ti ka??em",saniya),
        createMessage("e, nemoj me i ti sad",leo),
        createMessage("to je bilo predavno",leo),
        createMessage("znam! i sad si super, al razumijem ti mamu skroz",saniya),
        createMessage("bilo je ba?? gadno kad si zavr??io na infuziji",saniya),
        createMessage("nije mi jasno kak je netko do??o do tih slika",leo),
        createMessage("ne znam, sve je ovo tako ??udno...",saniya),
        createMessage("to mora biti netko iz na??e osnovne ??kole",leo),
        createMessage("ko bi drugi znao da sam prije bio.. to kaj sam bio?",leo),
        createMessage("ti nisi, dino nema ??anse, kaj?, klara koja je u d razredu?",leo),
        createMessage("za?? bi ona to napravila?",leo),
        createMessage("tko jo?? ima?",leo),
        createMessage("ne znam, sumnjam da je klara sposobna za tako ne??to",saniya),
        createMessage("svaka ??ast ako je stigla hakirati profile pored dvije ??kole ????????",saniya),
        createMessage("dolazi?? na tribine?",leo),
        createMessage("sad mi je lara poslala poruku",leo),
        createMessage("meni nitko nije ni?? poslao",saniya),
        createMessage("??udno ????",leo),
        createMessage("pa i ne",saniya),
        createMessage("ni prvi ni zadnji put da me sijamske blizanke nisu negdje zvale",saniya),
        createMessage("osim toga, imam dogovor",saniya),
        createMessage("nemoj tako",leo),
        createMessage("sorry, sorry. zaboravljam da ti ima?? ru??i??aste nao??ale za nekog??? ????",saniya),
        createMessage("za?? joj samo ne ka??e???",saniya),
        createMessage("malo sam se napio kod nje na tulumu",leo),
        createMessage("bilo je blizu???",leo),
        createMessage("za?? mi to nisi reko?!",saniya),
        createMessage("jer nije ni?? bilo",leo),
        createMessage("dino je do??o prije neg kaj sam ne?? reko",leo),
        createMessage("dino je bio ba?? ??udan na tom tulumu...",saniya),
        createMessage("ma on i lara su se opet bili ne?? posvadili??? ????",leo),
        createMessage("dino mi je frend, al ne znam ??to njih dvoje rade skupa",leo),
        createMessage("leo, jesi ve?? iza??ao?",saniya),
        createMessage("ne, spremam se..",leo),
        createMessage("za?? me to pita???",leo),
        createMessage("nisam sigurna da ??e?? htjeti i??i kad vidi?? ketyin story",saniya),
        createMessage("ahahaha, nisam znala da ima takav pjesni??ki talent",saniya),
        createMessage("l for love, e for eternal, o for one and only",saniya),
        createMessage("o ??em ti? ????",leo),
        createMessage("ne??to mi ka??e da je kety dobila virus",saniya),
        createMessage("ni?? mi nije jasno ????????",leo),
        createMessage("sve ??e ti biti jasno kad vidi?? story",saniya),
        createMessage("mislim da ima?? tajnu obo??avateljicu",saniya),
        createMessage("fuck??? ????",leo),
        createMessage("kaj da radim?",leo),
        createMessage("mene pita??... nije meni kety izjavila ljubav upravo javno",saniya),
        createMessage("ne znam kog drugog, ti vidi?? u matricu, kaj ne?",leo),
        createMessage("da bar...",saniya),
        createMessage("fuck, fuck! ????",leo),
        createMessage("dobro, ja sam mislila da je tebi jasno koje su katarinine namjere",saniya),
        createMessage("ne",leo),
        createMessage("za?? mi nisi ni?? rekla? ????",leo),
        createMessage("ti si zbilja naivan ako si mislio da su one sa??eku??e na uglu kod tobacca bile random ????",saniya),
        createMessage("kaj da radim?! ????",leo),
        createMessage("daj mi neki savjet",leo),
        createMessage("@Saniya",leo),
        createMessage("si tu?",leo),
        createMessage("hej, di si nestala? ",leo),
        createMessage("sad mi je dino napiso da on nije na kvartu. ne ku??im? ????",leo),
        createMessage("napiso sam da sam bolestan. da nemrem do??i.",leo),
        createMessage("ha, misli?? da ??e mi vjerovat? @Saniya",leo),
        createMessage("super... ba?? volim kad ovako ispari??...",leo),
        createMessage("...",leo),


        createMessage("ti vjeruje?? tu pri??u?", leo_r,2),
        createMessage("ne, ali nimalo.", saniya_r,2),
        createMessage("kety mi je priznala da je ona prvo ??ula za virus od lare", saniya_r,2),
        createMessage("ne znam za??to bi mi to rekla, al..", saniya_r,2),
        createMessage("kaj? ti misli?? da ovo ima veze s larom?", leo_r,2),
        createMessage("ne, zapravo ne.", saniya_r,2),
        createMessage("lara i ja mo??da vi??e nismo tako dobre ko nekad, ali lara nije taj lik ????", saniya_r,2),
        createMessage("malo mi je nevjerojatno da je sam tak snimio taj video i stavio onlajn", leo_r,2),
        createMessage("ma to nije mogo biti filip! ????", saniya_r,2),
        createMessage("nisam sigurna da on ima op??e na??e brojeve", saniya_r,2),
        createMessage("za??to bi on to napravio?", saniya_r,2),
        createMessage("kakve on ima veze s dinom? tobom? sa mnom? mislim da ??ak je on ??ak vodio kampanju za prag umjesto barcelone", saniya_r,2),
        createMessage("nema smisla", saniya_r,2),
        createMessage("a kao, uvijek je onaj na kojeg najmanje sumnja??...", leo_r,2),
        createMessage("klinac iz zadnje klupe", leo_r,2),
        createMessage("kety misli da je lara jer je ona jedina dobila virus i nije joj ni?? bilo ????", saniya_r,2),
        createMessage("to JE ??udno??? ????", leo_r,2),
        createMessage("ali ne mo??e biti ona", leo_r,2),
        createMessage("100 nije ona", leo_r,2),
        createMessage("dobro, znamo za??to TI tako misli????? ????", saniya_r,2),
        createMessage("ne...", leo_r,2),
        createMessage("ne mo??e biti ona jer ja znam ne??to ??to nitko ne zna", leo_r,2),
        createMessage("ummm ????", saniya_r,2),
        createMessage("ne mo??e?? mi sad ne re??i, to ti je valjda jasno?", saniya_r,2),
        createMessage("ravnatelj je njezin tetak", leo_r,2),
        createMessage("ona ga nikad ne bi onako razotkrila", leo_r,2),
        createMessage("wooow ????????", saniya_r,2),
        createMessage("sad mi je jasno za??to bi onako stisko ruku dini", saniya_r,2),
        createMessage("a kako ti zna???", saniya_r,2),
        createMessage("rekla mi je???", leo_r,2),
        createMessage("bilo ju je strah", leo_r,2),
        createMessage("a ti, jesi joj rekao?", saniya_r,2),
        createMessage("ne...", leo_r,2),
        createMessage("nonstop je pri??ala o kety i kako je ona super ????????", leo_r,2),
        createMessage("kako bi bili ba?? dobar par", leo_r,2),
        createMessage("stvarno ne znam ??to lara vidi u tom dini...", saniya_r,2),
        createMessage("nije ni ona savr??ena, al on je takav neandertalac", saniya_r,2),
        createMessage("sam ti rekla da sam ga na tulumu uhvatila kako joj kopa po sobi? ????", saniya_r,2),
        createMessage("ne?", leo_r,2),
        createMessage("i??la sam tra??iti neku sobu gdje mogu biti solo", saniya_r,2),
        createMessage("trebala sam obaviti jedan poziv", saniya_r,2),
        createMessage("slu??ajno sam ga na??la u larinoj sobi", saniya_r,2),
        createMessage("samog", saniya_r,2),
        createMessage("bio je ba?? ??udan", saniya_r,2),
        createMessage("reko je da je izgubio mobitel", saniya_r,2),
        createMessage("al cijelo vrijeme ga je dr??ao u ruci ????", saniya_r,2),
        createMessage("bio je ??udan cijeli tulum ????", leo_r,2),
        createMessage("ja sam prvo mislio da je do cuge", leo_r,2),
        createMessage("al onda ga je kety pitala za?? ne pije i sku??io sam da nije popio kap", leo_r,2),
        createMessage("jedno tri put mi je spomenuo kak njegov tata ima gun negdje u stanu ????????", leo_r,2),
        createMessage("i onda mi je poslije pri??o kak mu se stari prijetio tipovima koji bi mu probali barit staru u klubu", leo_r,2),
        createMessage("i da on nikad ne bi bio tak glup da puca u nekog ????", leo_r,2),
        createMessage("da ima puno pametnijih na??ina kak nekom danas pokazat da ima?? ve??eg", leo_r,2),
        createMessage("ti misli?? da on zna? ????", saniya_r,2),
        createMessage("pa prvo sam se usro da mo??da zna", leo_r,2),
        createMessage("al poslije, kad smo bili kod pekare, bio je ko uvijek sa mnom", leo_r,2),
        createMessage("sve normalno ????", leo_r,2),
        createMessage("sutra je iza??la ta snimka njegovog starog", leo_r,2),
        createMessage("moro je biti ??udan zbog tog, kaj ne?", leo_r,2),
        createMessage("kad si ti dobio poruku da si zara??en? ????", saniya_r,2),
        createMessage("i??o sam s larom doma poslije ??kole", leo_r,2),
        createMessage("otpratio sam je, oti??o do kioska po ??vake i .. ", leo_r,2),
        createMessage("ja sam je dobila poslije testa iz mati??e", saniya_r,2),
        createMessage("kad sam rekla lari da joj ne??u pomo??", saniya_r,2),
        createMessage("rekla sam joj da bi joj bilo bolje da malo misli i na ??kolu za promjenu", saniya_r,2),
        createMessage("??to ti je kety rekla?", leo_r,2),
        createMessage("ni??, da misli da je to lara napravila jer je ljubomorna na nju ????", saniya_r,2),
        createMessage("ljubomora na ??to?", leo_r,2),
        createMessage("nije mi htjela re?? to??no ????", saniya_r,2),
        createMessage("ne mogu vjerovat da bi to bila lara ????", saniya_r,2),
        createMessage("nije bila lara", saniya_r,2),
        createMessage("mislim da znam tko je??? ????", saniya_r,2),
        createMessage("tko?", leo_r,2),
        createMessage("sanja?", leo_r,2),
        createMessage("si tu?", leo_r,2),
        createMessage("sanja, di si nestala? ????????", leo_r,2),
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
        createMessage("sanja, koji ti je? nemre?? nam to radit.", lara),
        createMessage("e vidi, nije bed, nisi ti kriva", lara),
        createMessage("ajde se samo pliz javi, samo ??elimo znati da si okej..", lara),
        createMessage("@Saniya JAVI SE HITNO, UPRAVO ME ZVALA TVOJA STARA!", lara),
        createMessage("molim te, nemoj napravit neku glupost samo !!!", lara),
        createMessage("e, upravo sam lagala tvojoj staroj da si kod mene, al da ne ??eli?? sad pri??ati", lara),
        createMessage("rekla je da joj se odmah javi??", lara),
        createMessage("ina??e ??e do??i ovdje", lara),
        createMessage("@Saniya !!!!!!!!!!!!", lara),
        createMessage("sanja, nije takav big deal, nitko te ne optu??uje za ni??...", lara),
        createMessage("sad smo sreli lea, i on te tra??i isto", lara),
        createMessage("fkt se brinemo za tebe, sanja", lara),
        createMessage("mi smo svi uz tebe, fu??ka?? druge", lara),
        createMessage("mi te ne judgeamo op??e, on je problem, ne ti", lara),
        createMessage("on je odrasla osoba, ej!", lara),
        createMessage("sanja, ne znam ??to da radim, tvoja stara opet zove", lara),
        createMessage("slu??aj, sanja, leu je crko mob, reko je da te ??eka na va??em mjestu", lara),
        createMessage("kod klupica", lara),
        createMessage("sanj??i, oke, ovo je zadnja poruka. rekla sam tvojoj staroj istinu. nisam mogla vi??e lagat jer ne mogu ovo imat na du??i, ona se samo brine za tebe, sanja. al pusti sad to, boli te briga sad za njih. misli na sebe. na svoje frendove. mi fakat ne znam ??to bi da si ti ne?? napravi??. jo?? nas tolko toga ??eka. znam da vi??e nismo bliske ko prije, ali pliz, sanja nitko ne ??eli da se ono ponovi... ne moramo pri??ati, samo reci ??iva sam. to je to.", lara),
        createMessage("oke, dino mi je sad poslao poruku da te vidio s leom. samo sam ti htjela re??i da sam ba?? hepi zbog toga sanja. volimo te. ????????", lara),
        
      ]},
    {
      id: 6,
      visible: false,
      isGroupChat: false,
      title: "Leo i Lara", subtitle: "Klupice",
      threadAvatar: leolara,
      messages: [
        createMessage("hej...", leo_r),
        createMessage("samo sam ti htio re??i da je bilo kul ono ??to si napravila za sanju", leo_r),
        createMessage("hej!!", lara_r),
        createMessage("nznam, ne osje??am se ko da nisam ba?? puno napravila", lara_r),
        createMessage("drago mi je da je ipak sve oke ????", lara_r),
        createMessage("jel joj znaju mama i tata?", lara_r),
        createMessage("a znaju...", leo_r),
        createMessage('dr??e sad sve po tiho dok se ne sku??i ??to je to??no bila "priroda odnosa" ????', leo_r),
        createMessage("mislim, kolko tiho mo??e biti kad je cijela ??kola vidjela fotku na insta", leo_r),
        createMessage("nemrem vjerovat koji pedofil ????", lara_r),
        createMessage("dobro, pa nije on tolko stariji od nas", leo_r),
        createMessage("svejedno, profesor je?! Wtf??", lara_r),
        createMessage("ma ok, vjv nije bilo ni??, to je samo glupa kava", leo_r),
        createMessage("al nitko to ne misli tako", lara_r),
        createMessage("izgleda ko da joj dr??i ruku", lara_r),
        createMessage("ne ??elim se petljati..", lara_r),
        createMessage("jel tebi ne?? rekla?", leo_r),
        createMessage("ne, ni??. nije htjela pri??ati..", leo_r),
        createMessage("ja nisam pitao", leo_r),
        createMessage("samo mi je bilo drago da nije opet ne??...", leo_r),
        createMessage("da, ofc!! ????", lara_r),
        createMessage("kaj radi?? sad?", leo_r),
        createMessage("um, ni??, fejlam ovu zada??u iz mati??e ????", lara_r),
        createMessage("o??e?? i??i pro??etati flokija?", leo_r),
        createMessage("??to je dino kod tebe?", lara_r),
        createMessage("ne, mislio sam ak ti se da sa mnom...", leo_r),
        createMessage("mo??e", leo_r),
        createMessage("zapravo, super, ba?? te ??elim ne?? pitati ????", lara_r),
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
        createMessage("ina??e nisam takva osoba, al mislim da je fer da i ti ovo zna??", kety_r),
        createMessage("vidla sam lea i laru zajedno", kety_r),
        createMessage("bili su na ljuljama na malom dje??jem", kety_r),
        createMessage("slu??ajno sam ih vidla iz auta", kety_r),
        createMessage("kaj brije?? ti?", dino),
        createMessage("sigurna sam da su to bili oni jer mi se stari parkao skoro to??no prek puta", kety_r),
        createMessage("leo nije pri??o sa mnom kak je virus pustio onaj stori", kety_r),
        createMessage("ne znam, samo sam mislila da i ti treba?? znat", kety_r),
        createMessage("thx kaj si javila", dino),
        createMessage("??", kety_r),
        createMessage("dobro, nemoj ni?? re??i da sam ti ja rekla.. ????", kety_r),
        createMessage("ne ??elim da lara zna", kety_r),
        createMessage("ne brigaj ti ni??", dino),
        createMessage("sve je pod kontrolom", dino),
        createMessage("??to ti to zna??i? ????", kety_r),
        createMessage("hej, dino?", kety_r),
        createMessage("gle, vidim da si onlajn...", kety_r),
        createMessage("nemoj napravit samo neku glupost @Dinosaurus ????????", kety_r),
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
