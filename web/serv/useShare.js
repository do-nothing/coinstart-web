import { useCallback } from 'react';

/**
 * 4.需要在facebook上将要进行分享的url进行注册。
 * （1）访问https://developers.facebook.com/tools/debug/og/object/（需要翻墙或者VPN）
 * （2）在Input URL输入你要进行注册的URL
 * （3）点击Fetch new scrape information
 * （4）在When shared, this is what will be included中看到的图片和内容就是你要分享的内容。
 * （5）这是从facebook官网开发者中找到的，对image的要求是，1200 X 630是最佳显示，图片要求至少是600 X 315
 */
export function useShare() {
  const metaShare = useCallback(() => {
    const url = 'https://coinstart.io/';
    window.open(`https://www.facebook.com/sharer/sharer.php&u=${encodeURIComponent(url)}&display=popup&ref=plugin&src=share_button`, '', 'height=auto,width=auto,top=0,left=0,toolbar=no,menubar=no,scrollbars=no,resizable=no,location=no,status=no');
  }, []);

  return { metaShare };
}

/**
 * <!-- facebook -->
 * <meta property="og:image" content="@ViewBag.ShareImg" />
 * <meta property="og:locale" content="en-US" />
 * <meta property="og:type" content="website" />
 * <meta property="og:url" content="当前分享的链接--可要可不要" />
 */
/**
 * <a id="fbShare" href="javascript:window.open('http://www.facebook.com/sharer.php?u='+encodeURIComponent(document.location.href),'_blank','toolbar=yes, location=yes, directories=no, status=no, menubar=yes, scrollbars=yes, resizable=no, copyhistory=yes, width=600, height=450,top=100,left=350');void(0)">
 *   <img src="../images/home/home_footer_share_facebook.png">
 * </a>
 */