import { View, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import Taro from "@tarojs/taro";
import "taro-ui/dist/style/components/button.scss"; // 按需引入
import "taro-ui/dist/style/components/article.scss";
import "./index.scss";


export default () => {
  return (
    <View className="at-article">
      <View className="at-article__h1">MBTI性格测试</View>

      <View className="at-article__content">
        <View className="at-article__h3 subTitle">
          只需两分钟，就能准确地描述出你是谁以及你的性格特点
        </View>

        <AtButton
          type="primary"
          size="normal"
          className="enterBtn"
          circle
          onClick={() => {
            Taro.navigateTo({
              url: "/pages/doQuestion/index",
            });
          }}
        >
          开始测试
        </AtButton>
        <Image
          className="at-article__img"
          src="https://jdc.jd.com/img/400x400"
          mode="widthFix"
        />
      </View>
      <View className="at-article__info">作者:HYU</View>
    </View>
  );
};
