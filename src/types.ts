export interface Lesson {
  id: string;
  title: string;
  lecturer: string;
  date: string;
  duration?: string;
  thumbnail: string;
  views?: string;
  category: string;
  description?: string;
  isLive?: boolean;
}

export interface ScheduleEvent {
  id: string;
  title: string;
  lecturer: string;
  timeRange: string;
  location: string;
  date: string;
  isLive?: boolean;
  avatar: string;
}
