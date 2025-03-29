// キーを自動的に文字列リテラルにマッピングするヘルパー関数
export const createFieldMap = <T extends object>(): { [K in keyof T]: K } => {
  // 実行時には空のオブジェクトを作成し、Proxyで動的にプロパティアクセスを処理
  return new Proxy({} as { [K in keyof T]: K }, {
    get: (target, prop) => {
      // プロパティ名をそのまま返す
      return prop;
    },
  });
};

export const handleServiceFunction = async <T>(
  service: (...args: any[]) => Promise<T>
): Promise<T> => {
  try {
    return await service();
  } catch (error) {
    console.error(error);
    throw error;
  }
};
