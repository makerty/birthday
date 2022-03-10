// 霸都丶傲天 2019年10月10日 https://github.com/AJLoveChina/birthday
var config = {
    // 句子的长度可以任意， 你可以写十句话， 二十句话都可以
    // 每句话尽量不要超过15个字,不然展示效果可能不太好
    texts: [
        "送给我",      //这里,每句话结尾的最后一个逗号必须是英文的哦!! 很重要哦!!
        "心爱的宝宝",  // 同上...
        "今天是你的生日",
        "这是我们在一起的",
        "第一个生日",
        "祝宝宝生日快乐",
        "宝宝今天要特别开心哦",
        "我相信我们以后还会过很多很多个生日的",
        "美好的事物一定会在新的一岁如约而至",
        "纪念宝宝下凡的第二十一周年",
        "今天是没有流星也可以许愿的日子哦",
        "愿宝宝贪吃不胖",
        "愿宝宝永远都有好运气",
        "愿宝宝在新的一年里开开心心",
        "最后愿宝宝考研上岸！",
        "还有我真的真的很喜欢很喜欢宝宝",
    ],
    /**
     * imgs 可以不填, 但是如果要填写的话必须遵循下面的格式
     * "对应上面的文字, 要完全一样" : "图片地址, 可以把图片放在imgs文件夹中"
     * 例如
     * "心爱的小可爱": "./imgs/xiaokeai.jpg"
     *
     * 如果不要图片的话, 直接在每行开头写两个斜杠注释即可, 例如下面的 "今天是你的生日" 的图片就不会展示了:)
     * Tip: 图片最好用正方形or接近正方形, 看起来效果更好
     */
    imgs: {
        "心爱的宝宝": "./imgs/QQ图片20220310202430.jpg",
        // "今天是你的生日": "./imgs/birthday.jpg",
    },
    // 按钮文字描述, 以下是默认的按钮文字，英文的，您可以改成你喜欢的文字
    desc: {
        turn_on: "开始",
        play: "音乐",
        bannar_coming: "颜色",
        balloons_flying: "好像少点东西",
        cake_fadein: "蛋糕",
        light_candle: "蜡烛",
        wish_message: "生日快乐",
        story: "A MESSAGE FOR YOU",
    }
};
