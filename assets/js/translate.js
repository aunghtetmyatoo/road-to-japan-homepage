function getLangResources(){
    
    // Define arrays how many language you want to translate
    var mm = new Array();
    var en = new Array();
    var jp = new Array();

    //menu-translate

    mm['menu-home'] = "ပင်မ";
    en['menu-home'] = "Home"; 
    jp['menu-home'] = "ホーム";

    mm['menu-about-ucsy'] = "UCSY အကြောင်း";
    en['menu-about-ucsy'] = "About UCSY"; 
    jp['menu-about-ucsy'] = "UCSY について";

    mm['menu-teachers'] = "ဆရာ/မ";
    en['menu-teachers'] = "Teachers"; 
    jp['menu-teachers'] = "先生";

    mm['menu-students'] = "ကျောင်းသား/သူ";
    en['menu-students'] = "Students"; 
    jp['menu-students'] = "学生";

    mm['menu-photos'] = "ဓါတ်ပုံအယ်လ်ဘမ်";
    en['menu-photos'] = "Photos Album"; 
    jp['menu-photos'] = "写真集";

    mm['lng'] = "မြန်မာစာ";
    en['lng'] = "English"; 
    jp['lng'] = "日本語";


    //about-rtj translate

    mm['about-rtj-title'] = "Road to Japan အကြောင်း";
    en['about-rtj-title'] = "About Road to Japan"; 
    jp['about-rtj-title'] = "Road to Japan について";

    mm['about-rtj-body'] = "၂၀၁၉ခုနှစ်၊ ဒီဇင်ဘာလမှာဂျပန်ကို Road to Japan အစီအစဉ်အတွက်စတင်သင်ခဲ့တယ်။ ဂျပန်ဆရာများနှင့်မြန်မာဆရာများရှိသည်။ အထူးသဖြင့်မြန်မာဆရာများသည်သဒ္ဒါသင်ကြားခြင်း၊ ဆရာများသည်သင်ကြားရာတွင်ကောင်းမွန်ပြီးသင်ကြားမှုကိုကြင်နာစွာသင်ကြားပေးသောကြောင့်ကျောင်းသားများသည်ဂျပန်၌ ပို၍ သာလွန်သည်။ ဂျပန်နိုင်ငံသို့ N5 မှ N3 အထိသင်ကြားပေးမည့် Road to Japan အစီအစဉ်သည် Coronavirus ကြောင့်တက္ကသိုလ်မှာအတန်းမတက်တော့တဲ့အခါမှာတော့ကျွန်တော်ဟာအင်တာနက်ပေါ်မှာဂျပန်စာကိုဆက်လက်သင်ကြားပေးခဲ့ပါတယ်။ ဂျပန်သို့သွားလိုသောကျောင်းသားများအတွက် Road to Japan အစီအစဉ်သည်အလွန်ကောင်းသောအစီအစဉ်ဖြစ်သည်။";
    en['about-rtj-body'] = "In December 2019, I started teaching Japanese for the Road-to-Japan program. There are Japanese teachers and Myanmar teachers. In particular, Myanmar teachers teach grammar and Japanese teachers teach conversation and Japanese pronunciation. The teachers are good at teaching and they teach kindly, so the students are better at Japanese. The Road-to-Japan program will teach Japanese from N5 to N3. When I don't take classes at university because of coronavirus, I continue to teach Japanese on the Internet. The Road-to-Japan program is a very good program for students who are studying Japanese and want to work in Japan."; 
    jp['about-rtj-body'] = "２０１９年12月から「Road to Japan」プログラムの日本語を教えるのが始まりました。日本人の先生とミャンマー人先生がいます。特に、ミャンマー人先生は文法を教えて日本人の先生は会話と日本の発音を教えています。先生たちは教え方も上手だし、親切に教えるし、それで学生はもっと日本語が上手になりました。「Road to Japan」プログラムは日本語をN5からN3まで教える予定です。コロナウイルスで大学で授業を受けない時、インターネットで　日本語を続いて教えています。「Road to Japan」プログラムは日本語を勉強して日本で働こうと思っている学生に、とてもいいプログラムです。";

    

    //vision translate

    mm['vision-title'] = "ဗစ်ရှင်";
    en['vision-title'] = "Vision"; 
    jp['vision-title'] = "ビジョン";

    mm['vision-content-1'] = "ဂျပန်မှာအလုပ်လုပ်ချင်တဲ့မြန်မာတစ်နိုင်ငံလုံးကကျောင်းသားတွေဂျပန်နိုင်ငံမှာမြန်မြန်ဆန်ဆန်နဲ့လွယ်လွယ်ကူကူအလုပ်ရရန်";
    en['vision-content-1'] = "To get a job in Japan quickly and easily students from all over Myanmar who want to work in Japan"; 
    jp['vision-content-1'] = "日本で働きたいミャンマー中の大学生が日本で早くて簡単に就職するため";
    
    mm['vision-content-2'] = "ဂျပန်ကုမ္ပဏီများမှအလုပ်သမားအရင်းအမြစ်များမရှိခြင်းကြောင့်ဂျပန်ကုမ္ပဏီများအတွက်အရည်အချင်းပြည့်မီသောမြန်မာလူငယ်များကိုထောက်ပံ့ရန်။";
    en['vision-content-2'] = "To support qualified Myanmar youth for Japanese companies due to lack of labor resources from Japanese companies"; 
    jp['vision-content-2'] = "日本企業の労働力が不足しているので、日本企業に資格のあるミャンマーの若者を支援するため";

    
    
    
    //mission translate

    mm['mission-title'] = "မစ်ရှင်";
    en['mission-title'] = "Mission"; 
    jp['mission-title'] = "ミッション";

    mm['mission-content-1'] = "ကျောင်းသားများကဂျပန်စကားကောင်းစွာပြောတတ်ရန်";
    en['mission-content-1'] = "Proficiency in Japanese for students"; 
    jp['mission-content-1'] = "学生は日本語が上手に話せるように";
    
    mm['mission-content-2'] = "ကျောင်းသားတွေကဂျပန်ယဥ်ကျေးမှုတွေကိုနားလည်လာပြီးဂျပန်လူမျိုးတွေနဲ့ဆက်ဆံပြောဆိုနိုင်ရန်";
    en['mission-content-2'] = "To help students understand Japanese culture and communicate with Japanese people"; 
    jp['mission-content-2'] = "学生は日本の文化を分かるようになって、日本人とコミュニケーションするため";

    mm['mission-content-3'] = "ကျောင်းသားများနှင့်ဂျပန်ကုမ္ပဏီများကိုတိုက်ရိုက်ချိတ်ဆက်ပေးရန်";
    en['mission-content-3'] = "To connect students directly with Japanese companies"; 
    jp['mission-content-3'] = "学生と日本企業を直接コネクトするため";


    //values translate

    mm['values-title'] = "တန်ဖိုး";
    en['values-title'] = "Values"; 
    jp['values-title'] = "バリュー";

    mm['values-content-1'] = "မြန်မာလူမျိုးတွေနဲ့မြန်မာ့ယဥ်ကျေးမှုတွေကိုလေးစားသည်";
    en['values-content-1'] = "Respect Myanmar's individual and cultural background"; 
    jp['values-content-1'] = "ミャンマーの各自と文化的背景を尊重します";
    
    mm['values-content-2'] = "သေချာစွာအစီအစဥ်ဆွဲထားတဲ့ဂျပန်စာတွေကိုသင်ကြားပို့ချပေးသည်";
    en['values-content-2'] = "Professionally planned and executed teaching programs"; 
    jp['values-content-2'] = "専門的に計画と実施された日本の教育プログラム";

    mm['values-content-3'] = "သင်ယူနေစဉ်လူတိုင်းပျော်ရွှင်နိုင်ကြသည်";
    en['values-content-3'] = "Everyone can have fun while learning"; 
    jp['values-content-3'] = "誰もが習いながら楽しむことができます";

    


    //about-ucsy translate

    mm['ucsy-home'] = "ပင်မ";
    en['ucsy-home'] = "Home"; 
    jp['ucsy-home'] = "ホーム";

    mm['ucsy-title'] = "UCSY အကြောင်း";
    en['ucsy-title'] = "About UCSY"; 
    jp['ucsy-title'] = "UCSY について";

    mm['ucsy-content-1'] = "၎င်းကိုကွန်ပျူတာစင်တာ (UCC) အဖြစ်ယခုနှစ်တွင်တည်ထောင်ခဲ့သည်။";
    en['ucsy-content-1'] = "It was founded in the year as the Computer Center (UCC)."; 
    jp['ucsy-content-1'] = "年に、コンピュータセンター（UCC）として　設立されました。";
    
    mm['ucsy-content-2'] = "၁၉၈၈ ခုနှစ်တွင်အင်စတီကျု၏ကွန်ပျူတာသိပ္ပံနှင့်နည်းပညာ (ICST) အဖြစ်စတင်တည်ထောင်ခဲ့သည်။";
    en['ucsy-content-2'] = "Founded in 1988 as the Institute's Computer Science and Technology (ICST)."; 
    jp['ucsy-content-2'] = "1988年に、インスティテュートのコンピュータサイエンスとテクノロジー（ICST）として設立されました。";

    mm['ucsy-content-3'] = "၁၉၉၈ ခုနှစ်ဇူလိုင်လ ၁ ရက်နေ့တွင်ရန်ကုန်တက္ကသိုလ်ကိုရန်ကုန်ကွန်ပျူတာတက္ကသိုလ် (UCSY) အဖြစ်ပြောင်းလဲခဲ့သည်။";
    en['ucsy-content-3'] = "On July 1, 1998, the Institute was changed to Yangon Computer University (UCSY)."; 
    jp['ucsy-content-3'] = "1998年7月1日に、インスティテュートは　ヤンゴンコンピュータ大学(UCSY)に　変更されました。";

    mm['ucsy-content-4'] = "ရန်ကုန်ကွန်ပျူတာတက္ကသိုလ် (UCSY) သည်မြန်မာနိုင်ငံပညာရေး ၀ န်ကြီးဌာနလက်အောက်ရှိအဆင့်မြင့်ပညာရေးတက္ကသိုလ်တစ်ခုဖြစ်သည်။";
    en['ucsy-content-4'] = "Yangon Computer University (UCSY) is one of the higher education universities under the Ministry of Education of Myanmar."; 
    jp['ucsy-content-4'] = "ヤンゴンコンピュータ大学(UCSY)は　ミャンマーの教育省の下にある　高等教育大学のひとつです。";

    mm['ucsy-content-5'] = "UCSY သည်ကွန်ပျူတာသိပ္ပံ၊ ကွန်ပျူတာနည်းပညာနှင့်သတင်းအချက်အလက်နည်းပညာနယ်ပယ်များတွင်သင်ကြားပို့ချသည့်တက္ကသိုလ်ဖြစ်သည်။";
    en['ucsy-content-5'] = "UCSY is a university that teaches and studies in various fields of computer science, computer technology, and information technology."; 
    jp['ucsy-content-5'] = "UCSYは　コンピューターサイエンス、コンピューターテクノロジー、情報テクノロジーのいろいろな　分野で　教えること　と　研究することをしている　大学です。";

    mm['ucsy-content-6'] = "မြန်မာနိုင်ငံတွင်အထွေထွေနှင့်အဆင့်မြင့်ကွန်ပျူတာပညာလိုအပ်ချက်တိုးပွားလာစေရန်အတွက်တက္ကသိုလ်များသည်ဘွဲ့ကြိုနှင့်ဘွဲ့လွန်သင်တန်းများကိုလျှောက်ထားနိုင်သည်။";
    en['ucsy-content-6'] = "To support the growing needs for general and advanced computer education in Myanmar, universities can apply for both undergraduate and graduate courses."; 
    jp['ucsy-content-6'] = "ミャンマーで　高まる　一般的と高度なコンピューター教育のニーズを　サポートするために、大学では　学部と大学院の両方のコースに　申し込むことができます。";

    mm['ucsy-content-7'] = "ဒီဘွဲ့ကို ၁၉၈၆ တွင်စတင်ခဲ့ပြီး ၁၉၇၃ ခုနှစ်တွင်မဟာဘွဲ့ကိုရရှိခဲ့သည်။";
    en['ucsy-content-7'] = "The bachelor's degree began in 1986, while the master's degree was offered in 1973."; 
    jp['ucsy-content-7'] = "学士号は　1986年に　開始されましたが、修士号は　1973年に　提供されました。";

    mm['ucsy-content-8'] = "၂၀၀၁ ခုနှစ်မေလတွင်ပါရဂူဘွဲ့အစီအစဉ်ကိုစတင်ခဲ့သည်။";
    en['ucsy-content-8'] = "In May 2001, the PhD program was launched."; 
    jp['ucsy-content-8'] = "2001年5月、博士号プログラムが　開始されました。";

    mm['ucsy-content-9'] = "သင်ယူမှုအစီအစဉ်အားလုံးတွင်အဆင့်တစ်ခုစီကိုစာသင်နှစ်ခွဲခွဲသည်။";
    en['ucsy-content-9'] = "In all study programs, each level is divided into two semesters."; 
    jp['ucsy-content-9'] = "すべての学習プログラムで　各レベルは　2つの学期に分けられます。";

    mm['ucsy-content-10'] = "စာသင်ချိန်တိုင်းသည် ၁၈ ပတ်သင်ကြားရန်နှင့်လေ့ကျင့်ရန်ဖြစ်သည်။";
    en['ucsy-content-10'] = "Each semester takes 18 weeks to teach and practice."; 
    jp['ucsy-content-10'] = "各学期には、教えることと実践のために、18週間　かかります。";

    mm['ucsy-content-11'] = "စာမေးပွဲတစ်ခုစီကိုစာသင်နှစ်အကုန်ပိုင်းတွင်ပြုလုပ်သည်။";
    en['ucsy-content-11'] = "Exams are held at the end of each semester."; 
    jp['ucsy-content-11'] = "試験は　各学期の終わりに　行われます。";

    mm['ucsy-content-12'] = "တက်ရောက်သူများ၊ သင်ခန်းစာများ၊ အလေ့အကျင့်များနှင့်တာ ၀ န်များကိုအဆင့်တိုင်းကိုကျော်လွန်သွားလိမ့်မည်။";
    en['ucsy-content-12'] = "Attendance, tutorials, practices and assignments will be considered to pass each level."; 
    jp['ucsy-content-12'] = "各レベルに合格するように、出席、チュートリアル、実践、割り当てが　考慮されます。<";
    

    //teachers translate

    mm['teachers-home'] = "ပင်မ";
    en['teachers-home'] = "Home"; 
    jp['teachers-home'] = "ホーム";

    mm['teachers-title'] = "ဆရာ/မ";
    en['teachers-title'] = "Teachers"; 
    jp['teachers-title'] = "先生";


    //students translate

    mm['students-home'] = "ပင်မ";
    en['students-home'] = "Home"; 
    jp['students-home'] = "ホーム";

    mm['students-title'] = "ကျောင်းသား/သူ";
    en['students-title'] = "Students"; 
    jp['students-title'] = "学生";

    //photos title translate

    mm['photos-title'] = "ဓါတ်ပုံအယ်လ်ဘမ်";
    en['photos-title'] = "Photos Album"; 
    jp['photos-title'] = "写真集";
    
    // Added new array defined arrays.
    var resources = new Array();
    resources['mm'] = mm;
    resources['en'] = en;
    resources['jp'] = jp;
    
    return resources;
}

function changeLanguage(lng) {
    var resources = getLangResources()[lng];

    //menu-translate

    $("a[name='menu-home']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("a[name='menu-about-ucsy']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("a[name='menu-teachers']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("a[name='menu-students']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("a[name='menu-photos']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("a[name='lng']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    //about-rtj translate

    $("h2[name='about-rtj-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("p[name='about-rtj-body']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    //vision translate

    $("h4[name='vision-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    $("span[name='vision-content-1']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='vision-content-2']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='vision-content-3']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    //mission translate

    $("h4[name='mission-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    $("span[name='mission-content-1']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='mission-content-2']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='mission-content-3']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    //values translate

    $("h4[name='values-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    $("span[name='values-content-1']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='values-content-2']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='values-content-3']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });





    //about-ucsy translate

    $("span[name='ucsy-home']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("h2[name='ucsy-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-1']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-2']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-3']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-4']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-5']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-6']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-7']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-8']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-9']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-10']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-11']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='ucsy-content-12']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    //teachers translate

    $("span[name='teachers-home']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='teachers-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("h2[name='teachers-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });



    //students translate

    $("span[name='students-home']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("span[name='students-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });

    $("h2[name='students-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });


    //photos title translate

    $("h2[name='photos-title']").each(function(i, elt){
        $(elt).text(resources[$(elt).attr("caption")]);
    });



}


$(function() { 
    // Default Language

    changeLanguage("jp");
 
    $("a#mm_button").click(function(){
        changeLanguage("mm");
    });

    $("a#en_button").click(function(){
        changeLanguage("en");
    });

    $("a#jp_button").click(function(){
        changeLanguage("jp");
    });
});
