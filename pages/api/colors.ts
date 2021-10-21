import type { NextApiRequest, NextApiResponse } from "next";

export interface Color {
  id: string;
  code: string;
  date: string;
  likes: string;
}

export interface Colors {
  readonly [index: number]: string;
  colors: Color[];
}

export default (req: NextApiRequest, res: NextApiResponse<Colors>) => {
  res.status(200).json({
    colors: [
      {
        id: "225739",
        code: "e7e7de00889100587a0f3057",
        date: "12/29/20",
        likes: "2699",
      },
      {
        id: "225709",
        code: "ef4f4fee9595ffcda374c7b8",
        date: "12/28/20",
        likes: "2339",
      },
      {
        id: "226192",
        code: "e7d9ea11698e19456b16c79a",
        date: "12/27/20",
        likes: "1788",
      },
    ],
  });
};
