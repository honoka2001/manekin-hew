import React from "react";

function ManekinShow () {
  return (
    <div className="bg-gray-100">
      <div className=" bg-white flex justify-center w-3/5 container mx-auto">
        <div className="flex-auto container mt-4 ml-8">
          <img src="/testImages/coordinate.jpeg" alt="manekin-img" className="w-80 h-96 ml-8 object-contain"/>
          <div className="mt-8 ml-10">
            <h2 className="font-semibold">使用アイテム</h2>
            <ul className="my-6 mx-4">
              <li className="flex mb-4">
                <img src="/testImages/parka.jpeg" alt="item-img" className="w-28 h-36 flex-none object-contain"/>
                <p className="my-auto ml-12">ブラウス</p>
              </li>
              <li className="flex mb-4">
                <img src="/testImages/skirt.jpeg" alt="item-img" className="w-28 h-36 flex-none object-contain"/>
                <p className="my-auto ml-12">ブラウス</p>
              </li>
              <li className="flex mb-4">
                <img src="/testImages/boots.webp" alt="item-img" className="w-28 h-36 flex-none object-contain"/>
                <p className="my-auto ml-12">ブラウス</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex-auto container mx-auto mt-2">
          <h1 className="font-bold text-2xl my-5">春のコーデ</h1>
          <p  className="font-semibold text-3xl text-red-500 mb-5">¥ 1,200</p>
          <div>
            <h2 className="font-semibold">出品者</h2>
            <div className="flex my-3">
              <img src="sample.png" className="rounded-full w-12 h-12 flex-none ml-2"/>
              <div className="flex-auto ml-3">
                <p>name</p>
                <p>163cm</p>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-semibold">商品説明</h2>
            <p className="text-sm mt-3 ml-2">
              商品説明商品説明商品説明<br />
              商品説明商品説明商品説明商品説明商品説明
            </p>
          </div>
          <button className="bg-red-500 font-bold text-white text-xl py-2 w-11/12 rounded my-10">購入に進む</button>
          <h2 className="font-semibold text-lg">コメント</h2>
          <p className="text-gray-600 mt-2 mb-4 ml-6">コメントはまだありません</p>
          <p className="font-semibold text-gray-600">商品へのコメント</p>
          <textarea name="comment" cols="100" rows="5" placeholder="コメントする" className="border border-gray-300 w-11/12 rounded-lg py-4 px-6"></textarea><br />
          <button className="bg-gray-600 font-bold text-white py-2 w-11/12 rounded my-2">コメントを送信</button>
        </div>
      </div>
    </div>
  );
}

export default ManekinShow;