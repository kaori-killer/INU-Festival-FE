import express from "express";
import cors from "cors";
import { randomUUID } from "crypto";

const port = 3000;
const app = express();

app.use(cors());
app.use(express.json());

/* ---------------- Utils ---------------- */
const now = () => new Date()
  .toISOString()
  .slice(0, 19)
  .replace("T", " ");

/* ---------------- Sentence 저장소 ---------------- */
const shouts = [
  {
    id: 1,
    content: "오늘도 축제 화이팅!!",
    emoji: "happy",
    userId: 1,
    studentId: "201911***",
  },
  {
    id: 2,
    content: "최근에 본 좋은 영화 있나여?",
    emoji: "happy",
    userId: 2,
    studentId: "201911***",
  },
  {
    id: 3,
    content: "이런 정보를 공유해주셔서 감사합니다!",
    emoji: "excited",
    userId: 3,
    studentId: "201911113",
  },
];

/* ---------------- Booth 저장소 ---------------- */
const boothList = [
  {
    id: 1,
    name: "제3회 인영천화 영화제 (소극장)",
    category: "비주점",
    description: "중앙 동아리 인영천화에서 3번째 영화제를 개최합니다.",
    time: "10:00 - 16:00",
    x: "33.47318353",
    y: "124.850051",
    boothDays: [{ id: 1, day: "화" }],
  },
  {
    id: 2,
    name: "즐거운 보인다랜드",
    category: "비주점",
    description: "나 인천대생인데 내 동년배들 다 보인다한다.",
    time: "10:00 - 16:00",
    x: "33.47378533",
    y: "124.851666",
    boothDays: [
      { id: 2, day: "화" },
      { id: 99, day: "수" },
    ],
  },
  {
    id: 3,
    name: "V.D.E STORE",
    category: "비주점",
    description:
      "커스텀 의류, 키링, 머리띠, 악세서리 등 개성 있는 패션 아이템 판매 부스.",
    time: "10:00 - 16:00",
    x: "33.47298015",
    y: "124.8506122",
    boothDays: [
      { id: 3, day: "화" },
      { id: 100, day: "수" },
    ],
  },
  {
    id: 4,
    name: "인하대 미술동아리 전시회",
    category: "비주점",
    description: "인하대 미술동아리에서 준비한 전시회입니다.",
    time: "10:00 - 16:00",
    x: "33.47350000",
    y: "124.851200",
    boothDays: [{ id: 4, day: "수" }],
  },
  {
    id: 5,
    name: "맛있는 푸드트럭",
    category: "푸드",
    description: "다양한 음식을 즐길 수 있는 푸드트럭 존",
    time: "10:00 - 22:00",
    x: "33.47400000",
    y: "124.852000",
    boothDays: [
      { id: 5, day: "화" },
      { id: 101, day: "목" },
    ],
  },
];

/* ---------------- Booth 댓글 저장소 ---------------- */
const boothCommentsMap: Record<string, any[]> = {
  1: [
    {
      id: "8",
      content: "기존 댓글",
      emoji: "happy",
      boothId: "1",
      userId: "201901284",
      createdAt: "2024-02-21 10:22:02",
      updatedAt: "2024-02-21 10:22:02",
    },
  ],
};

/* ---------------- Keywords ---------------- */
app.get("/keywords", (_req, res) => {
  res.json({
    keywords: [
      { id: 1, keyword: "축제" },
      { id: 2, keyword: "흥미" },
      { id: 3, keyword: "사람" },
      { id: 4, keyword: "분위기" },
      { id: 5, keyword: "음식" },
      { id: 6, keyword: "거리" },
      { id: 7, keyword: "프로그램" },
      { id: 8, keyword: "이번" },
      { id: 9, keyword: "예상" },
      { id: 10, keyword: "참여" },
    ],
  });
});

/* ---------------- Sentence ---------------- */
app.get("/sentence", (_req, res) => {
  res.json({ shouts });
});

app.post("/sentence", (req, res) => {
  const { studentId, content, emoji } = req.body;
  if (!studentId || !content || !emoji) {
    return res
      .status(400)
      .json({ message: "studentId, content, emoji는 필수입니다." });
  }

  const newSentence = {
    id: shouts.length ? shouts[shouts.length - 1].id + 1 : 1,
    content,
    emoji,
    userId: Date.now(),
    studentId,
    createdAt: now(),
    updatedAt: now(),
  };

  shouts.push(newSentence);
  res.status(201).json(newSentence);
});

app.delete("/sentence/:id", (req, res) => {
  const { id } = req.params;
  const idx = shouts.findIndex((s) => String(s.id) === String(id));
  if (idx === -1) return res.status(404).json({ message: "해당 id를 가진 문구가 없습니다." });

  const loginUserId = "201901284"; // 더미 로그인
  if (String(shouts[idx].userId) !== loginUserId) {
    return res.status(403).json({ message: "작성자만 삭제할 수 있습니다." });
  }

  shouts.splice(idx, 1);
  res.json({ success: true, message: "문구가 삭제되었습니다." });
});

/* ---------------- Booth ---------------- */
const defaultImg = [{ id: 1, url: "boothImg1.jpg" }];
const defaultMarker = "markerBlue";

app.get("/booth/ranking", (_req, res) => {
  const booths = boothList.slice(0, 5).map((b) => ({
    ...b,
    boothImgs: defaultImg,
    markerImage: defaultMarker,
  }));
  res.json({ booths });
});

app.get("/booth/all", (_req, res) => {
  const booths = boothList.map((b) => ({
    ...b,
    boothImgs: defaultImg,
    markerImage: defaultMarker,
  }));
  res.json({ booths });
});

app.get("/booth/:id", (req, res) => {
  const { id } = req.params;
  const booth = boothList.find((b) => String(b.id) === id);
  if (!booth) return res.status(404).json({ message: "해당 id를 가진 부스가 없습니다." });

  const boothComments = boothCommentsMap[id] || [];
  res.json({
    booth: {
      ...booth,
      boothImgs: defaultImg,
      markerImage: defaultMarker,
      boothComments,
    },
  });
});

/* ---------------- Booth Comments ---------------- */
app.get("/booth/:bid/comment", (req, res) => {
  const { bid } = req.params;
  res.json({ boothComments: boothCommentsMap[bid] || [] });
});

app.post("/booth/comment/:bid", (req, res) => {
  const { bid } = req.params;
  const {
    id, content, emoji, userId,
  } = req.body;
  const newComment = {
    id: id ?? randomUUID(),
    content,
    emoji,
    boothId: bid,
    userId,
    createdAt: now(),
    updatedAt: now(),
  };
  if (!boothCommentsMap[bid]) boothCommentsMap[bid] = [];
  boothCommentsMap[bid].push(newComment);
  res.status(201).json(newComment);
});

app.put("/booth/:bid/comment/:cid", (req, res) => {
  const { bid, cid } = req.params;
  const { content, emoji } = req.body;
  if (!boothCommentsMap[bid]) return res.status(404).json({ message: "해당 id를 가진 부스가 없습니다." });

  const comment = boothCommentsMap[bid].find(
    (c) => String(c.id) === String(cid),
  );
  if (!comment) return res.status(404).json({ message: "해당 id를 가진 댓글이 없습니다." });

  const loginUserId = "201901284";
  if (comment.userId !== loginUserId) {
    return res
      .status(403)
      .json({ message: "댓글 작성자만 수정할 수 있습니다." });
  }

  comment.content = content ?? comment.content;
  comment.emoji = emoji ?? comment.emoji;
  comment.updatedAt = now();

  res.json(comment);
});

app.delete("/booth/:bid/comment/:cid", (req, res) => {
  const { bid, cid } = req.params;
  if (!boothCommentsMap[bid]) return res.status(404).json({ message: "해당 id를 가진 부스가 없습니다." });

  const idx = boothCommentsMap[bid].findIndex(
    (c) => String(c.id) === String(cid),
  );
  if (idx === -1) return res.status(404).json({ message: "해당 id를 가진 댓글이 없습니다." });

  const loginUserId = "201901284";
  if (boothCommentsMap[bid][idx].userId !== loginUserId) {
    return res
      .status(403)
      .json({ message: "댓글 작성자만 삭제할 수 있습니다." });
  }

  boothCommentsMap[bid].splice(idx, 1);
  res.json({ success: true, message: "댓글이 삭제되었습니다." });
});

/* ---------------- Booth Category ---------------- */
app.get("/booth/category", (_req, res) => {
  res.json({
    categories: {
      days: ["월", "화", "수"],
      filters: ["주점", "비주점", "푸드트럭"],
    },
  });
});

/* ---------------- Days ---------------- */
app.get("/days", (_req, res) => {
  res.json({
    days: ["월", "화", "수"],
    dates: ["2024-05-01", "2024-05-02", "2024-05-03"],
  });
});

/* ---------------- Notice ---------------- */
app.get("/notice", (_req, res) => {
  res.json({
    notices: [
      {
        id: "1",
        category: "공지사항",
        title: "알콜존 안내",
        content: "알콜존 안내입니다~ 위치는~ 시간은...",
        updatedAt: "2024-02-05 22:31:43",
        noticeImgs: [{ id: 1, img: "boothImg1.jpg" }],
      },
      {
        id: "2",
        category: "공지사항",
        title: "셔틀버스 안내",
        content: "셔틀버스 안내입니다~ 위치는~ 시간은...",
        updatedAt: "2024-02-05 22:31:43",
        noticeImgs: [{ id: 2, img: "boothImg1.jpg" }],
      },
      {
        id: "3",
        category: "공지사항",
        title: "푸드존 안내",
        content: "푸드존 안내입니다~ 위치는~ 시간은...",
        updatedAt: "2024-02-05 22:31:43",
        noticeImgs: [{ id: 3, img: "boothImg1.jpg" }],
      },
      {
        id: "4",
        category: "이벤트",
        title: "경품추첨 안내",
        content: "경품추첨 안내입니다~ 위치는~ 시간은...",
        updatedAt: "2024-02-05 22:31:43",
        noticeImgs: [{ id: 4, img: "boothImg1.jpg" }],
      },
    ],
  });
});

/* ---------------- Timetable ---------------- */
app.get("/timetable", (_req, res) => {
  res.json({
    performs: [
      {
        id: "1",
        name: "포크라인",
        category: "동아리",
        detail: "어쿠스틱 공연",
        date: "12월 12일",
        day: "day1",
        startTime: "18:30",
        endTime: "19:00",
        img: "boothImg1.jpg",
      },
      {
        id: "10",
        name: "데이먼스 이어",
        category: "연예인",
        detail: "데이먼스 이어",
        date: "12월 12일",
        day: "day1",
        startTime: "21:00",
        endTime: "21:30",
        img: "boothImg1.jpg",
      },
    ],
  });
});

/* ---------------- Server Start ---------------- */
app.listen(port, () => {
  console.log(`✅ Server running at http://localhost:${port}`);
});
