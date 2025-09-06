interface Notice {
    id: string;
    category: string;
    title: string
    content: string;
    updatedAt: string;
    noticeImgs: Array<{ id: number; img: string }>;
}

export default Notice;
