import MockJs from "mockjs";

export function delUserApi(params: { id: string }) {
  console.log("delUserApi", params.id);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({success: true});
    }, 3000)
  })
  // return Promise.resolve({
  //   success: true,
  //   data: params.id,
  // });
}

export const getUserListApi = (params: any) => {
  console.log("getUserListApi", params);

  return Promise.resolve({
    success: true,
    data: {
      list: MockJs.mock({
        [`list|${params.pageSize}`]: [
          {
            "id|+1": 1,
            name: "@cname",
            email: "@email",
          },
        ],
      }).list.filter(it => it.name.includes(params.keyword)),
      total: 100,
    },
  });
    // return request.get('/product-cms/user', { params })
};

export const getUserDetailApi = (params: any) => {
  console.log("getUserDetailApi", params);
  return Promise.resolve({
    success: true,
    data: {
      // TODO 自己mock数据，参考getUserListApi
    },
  });
};
