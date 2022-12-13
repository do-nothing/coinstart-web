import Image from 'next/image';

export default function FooterSection() {
  return (
    <footer>
      <div className="content">
        <div className="logo">
          <img src="/logo.png" alt="logo-icon-white" />
          <span>coinstart</span>
        </div>
        <div className="list list1">
          <a href="#">
            Company
          </a>
          <a href="#">
            About
          </a>
          <a href="#">
            Careers
          </a>
          <a href="/privacy">
            Privacy Polic
          </a>
          <a href="#">
            Terms f Use
          </a>
        </div>

        <div className="list list2">
          <a href="#">
            Product
          </a>
          <a href="#">
            Coinstart Wallet
          </a>
          <a href="#">
            Startmall
          </a>
          <a href="#">
            Startpay
          </a>
        </div>

        <div className="list list3">
          <a href="#">
            Governance
          </a>
          <a href="#">
            Coinstart Dao
          </a>
        </div>

        <div className="copyright">
          © 2022 coinstart. All rights reserved.
        </div>

        <div className="contact">
          <a href="https://twitter.com/coinstartwallet" target="_blank" rel="noreferrer">
            <Image src="/icon-twitter.png" alt="icon-twitter" layout='fixed' width={30} height={30} />
          </a>
          <a href="https://discord.gg/75m2wmNKPZ" target="_blank" rel="noreferrer">
            <Image src="/icon-discord.png" alt="icon-discord" layout='fixed' width={30} height={30} />
          </a>
          <a href="#" target="_blank">
            <Image src="/icon-youtube.png" alt="icon-youtube" layout='fixed' width={30} height={30} />
          </a>
          <div className="fb-share-button" data-href="https://coinstart.io/" data-layout="button_count" data-size="small"><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcoinstart.io%2F&amp;src=sdkpreparse" class="fb-xfbml-parse-ignore">分享</a></div>

          <a class="twitter-share-button"
            href="https://twitter.com/intent/tweet?url=https%3A%2F%2Fcoinstart.io%2F&text=Your%20Portal%20to%20crypto%20world%2C%20safe%20%26%20easy%20for%20you%20to%20store%2C%20buy%2C%20send%2C%20receive%2C%20swap%20tokens%20and%20collect%20NFTs.&image=https%3A%2F%2Fbafkreicrqzwfmjdbp3uzd73ezmwdjlso2zeexj2t5agmpjhxuux6z6es4e.ipfs.nftstorage.link"
            data-size="large"
          ><i /> <label>Tweet</label>
          </a>
        </div>
      </div>
    </footer>
  );
}