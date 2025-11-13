export default function Contact() {
  return (
    <div className="bg-[#e7e7e7] text-[#191d32]">
      <div className="container mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-bold text-lg mb-4">联系我们</h3>
          <p>Vancouver Gospel Baptist Church</p>
          <p>地址: 3320 Crown Street, Vancouver, B.C</p>
          <p>电话: 778-321-1758</p>
        </div>
        <div>
          <h3 className="font-bold text-lg mb-4">联系表格</h3>
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="姓名"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="email"
              placeholder="邮箱"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="tel"
              placeholder="电话"
              className="border border-gray-300 p-2 rounded"
            />
            <input
              type="text"
              placeholder="留言"
              className="border border-gray-300 p-2 rounded"
            />
          </div>
          <button className="mt-4 bg-[#191d32] text-white px-4 py-2 rounded">
            提交
          </button>
        </div>
      </div>
    </div>
  );
}
