// Folder Manager — Types & Mock Data

/**
 * FOLDER TYPES
 */
export interface Folder {
  id: string;
  name: string;
  itemCount: number;
  lastModified: Date;
  color: string;
  size: string;
  sizeBytes?: number;
  isFavorite?: boolean;
  isArchived?: boolean;
  parentId?: string;
  path?: string;
  description?: string;
  tags?: string[];
  createdAt?: Date;
  shared?: boolean;
  sharedWith?: string[];
  permissions?: FolderPermissions;
}

export interface FolderPermissions {
  canEdit: boolean;
  canDelete: boolean;
  canShare: boolean;
  canView: boolean;
}

export interface FolderStats {
  totalFolders: number;
  totalFiles: number;
  totalSize: string;
  totalSizeBytes: number;
  averageFilesPerFolder: number;
  oldestFolder: string;
  newestFolder: string;
  largestFolder: string;
  mostFilesFolder: string;
}

export interface FolderActivity {
  id: string;
  folderId: string;
  action: "create" | "update" | "delete" | "rename" | "move" | "share";
  timestamp: Date;
  user?: string;
  details?: string;
}

export type SortOption = "name" | "date" | "size" | "items" | "favorite" | "shared" | "created";
export type ViewMode = "grid" | "list" | "compact";
export type FilterOption = "all" | "favorites" | "archived" | "shared" | "recent";

/**
 * PREMIUM GRADIENT PAIRS FOR 3D FOLDER CARDS
 */
export const FOLDER_GRADIENTS: [string, string][] = [
  ["#3B82F6", "#6366F1"], // Blue → Indigo
  ["#8B5CF6", "#EC4899"], // Purple → Pink
  ["#06B6D4", "#3B82F6"], // Cyan → Blue
  ["#10B981", "#06B6D4"], // Emerald → Cyan
  ["#F97316", "#EF4444"], // Orange → Red
  ["#EC4899", "#8B5CF6"], // Pink → Purple
  ["#6366F1", "#8B5CF6"], // Indigo → Violet
  ["#14B8A6", "#10B981"], // Teal → Emerald
  ["#F59E0B", "#F97316"], // Amber → Orange
  ["#EF4444", "#EC4899"], // Red → Pink
  ["#0D9488", "#06B6D4"], // Teal → Cyan
  ["#8B5CF6", "#6366F1"], // Purple → Indigo
  ["#F97316", "#F59E0B"], // Orange → Amber
  ["#EC4899", "#F97316"], // Pink → Orange
  ["#3B82F6", "#06B6D4"], // Blue → Cyan
  ["#10B981", "#14B8A6"], // Emerald → Teal
] as const;

export const FOLDER_COLORS = [
  "#6366f1", // indigo
  "#8b5cf6", // violet
  "#3b82f6", // blue
  "#06b6d4", // cyan
  "#10b981", // emerald
  "#f59e0b", // amber
  "#ef4444", // red
  "#ec4899", // pink
  "#14b8a6", // teal
  "#f97316", // orange
  "#0D9488", // dark teal
  "#7C3AED", // purple
  "#DB2777", // dark pink
  "#2563EB", // royal blue
  "#059669", // dark emerald
  "#D97706", // dark amber
] as const;

export const FOLDER_ICONS = [
  "📁",
  "📂",
  "📄",
  "📊",
  "📈",
  "📉",
  "📋",
  "📌",
  "📎",
  "📏",
  "📐",
  "🗂️",
  "📒",
  "📕",
  "📗",
  "📘",
  "📙",
  "📚",
  "📑",
  "📃",
] as const;

/**
 * UTILITY FUNCTIONS
 */
export function getRandomColor(): string {
  return FOLDER_COLORS[Math.floor(Math.random() * FOLDER_COLORS.length)];
}

export function getGradientForColor(color: string): [string, string] {
  const idx = FOLDER_COLORS.indexOf(color as (typeof FOLDER_COLORS)[number]);
  if (idx >= 0 && idx < FOLDER_GRADIENTS.length) return FOLDER_GRADIENTS[idx];
  return FOLDER_GRADIENTS[Math.floor(Math.random() * FOLDER_GRADIENTS.length)];
}

export function getRandomIcon(): string {
  return FOLDER_ICONS[Math.floor(Math.random() * FOLDER_ICONS.length)];
}

export function generateId(): string {
  return `folder-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function formatFileSize(bytes: number): string {
  if (bytes === 0) return "0 B";
  const k = 1024;
  const sizes = ["B", "KB", "MB", "GB", "TB", "PB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  const value = parseFloat((bytes / Math.pow(k, i)).toFixed(1));
  return value + " " + sizes[i];
}

export function parseFileSize(size: string): number {
  const units: Record<string, number> = {
    B: 1,
    KB: 1024,
    MB: 1048576,
    GB: 1073741824,
    TB: 1099511627776,
  };

  const match = size.match(/^([\d.]+)\s*([A-Z]+)$/);
  if (!match) return 0;

  const value = parseFloat(match[1]);
  const unit = match[2];
  return value * (units[unit] || 1);
}

export function formatRelativeTime(date: Date): string {
  const now = new Date();
  const diff = now.getTime() - date.getTime();

  const seconds = Math.floor(diff / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);
  const weeks = Math.floor(days / 7);
  const months = Math.floor(days / 30);
  const years = Math.floor(days / 365);

  if (years > 0) return `${years} year${years > 1 ? "s" : ""} ago`;
  if (months > 0) return `${months} month${months > 1 ? "s" : ""} ago`;
  if (weeks > 0) return `${weeks} week${weeks > 1 ? "s" : ""} ago`;
  if (days > 0) return `${days} day${days > 1 ? "s" : ""} ago`;
  if (hours > 0) return `${hours}h ago`;
  if (minutes > 0) return `${minutes}m ago`;
  return "Just now";
}

export function formatDate(date: Date): string {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export function isRecent(date: Date, days: number = 7): boolean {
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  return diff < days * 24 * 60 * 60 * 1000;
}

export function isToday(date: Date): boolean {
  const today = new Date();
  return date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear();
}

export function isThisWeek(date: Date): boolean {
  const now = new Date();
  const weekStart = new Date(now);
  weekStart.setDate(now.getDate() - now.getDay());
  weekStart.setHours(0, 0, 0, 0);

  return date >= weekStart && date <= now;
}

export function isThisMonth(date: Date): boolean {
  const now = new Date();
  return date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear();
}

/**
 * FOLDER MANAGEMENT FUNCTIONS
 */
export function getTotalFileCount(folders: Folder[]): number {
  return folders.reduce((sum, f) => sum + f.itemCount, 0);
}

export function getTotalSize(folders: Folder[]): string {
  const totalBytes = folders.reduce((sum, f) => sum + (f.sizeBytes || parseFileSize(f.size)), 0);
  return formatFileSize(totalBytes);
}

export function getFolderStats(folders: Folder[]): FolderStats {
  if (folders.length === 0) {
    return {
      totalFolders: 0,
      totalFiles: 0,
      totalSize: "0 B",
      totalSizeBytes: 0,
      averageFilesPerFolder: 0,
      oldestFolder: "",
      newestFolder: "",
      largestFolder: "",
      mostFilesFolder: "",
    };
  }

  const totalFiles = getTotalFileCount(folders);
  const totalBytes = folders.reduce((sum, f) => sum + (f.sizeBytes || parseFileSize(f.size)), 0);

  const sortedByDate = [...folders].sort((a, b) => a.lastModified.getTime() - b.lastModified.getTime());
  const sortedBySize = [...folders].sort((a, b) =>
    (b.sizeBytes || parseFileSize(b.size)) - (a.sizeBytes || parseFileSize(a.size))
  );
  const sortedByItems = [...folders].sort((a, b) => b.itemCount - a.itemCount);

  return {
    totalFolders: folders.length,
    totalFiles,
    totalSize: formatFileSize(totalBytes),
    totalSizeBytes: totalBytes,
    averageFilesPerFolder: Math.round(totalFiles / folders.length),
    oldestFolder: sortedByDate[0]?.name || "",
    newestFolder: sortedByDate[sortedByDate.length - 1]?.name || "",
    largestFolder: sortedBySize[0]?.name || "",
    mostFilesFolder: sortedByItems[0]?.name || "",
  };
}

export function sortFolders(
  folders: Folder[],
  sortBy: SortOption,
  ascending: boolean = false
): Folder[] {
  return [...folders].sort((a, b) => {
    let comparison = 0;

    switch (sortBy) {
      case "name":
        comparison = a.name.localeCompare(b.name);
        break;
      case "date":
        comparison = a.lastModified.getTime() - b.lastModified.getTime();
        break;
      case "items":
        comparison = a.itemCount - b.itemCount;
        break;
      case "size": {
        const aBytes = a.sizeBytes || parseFileSize(a.size);
        const bBytes = b.sizeBytes || parseFileSize(b.size);
        comparison = aBytes - bBytes;
        break;
      }
      case "favorite":
        comparison = (a.isFavorite ? 1 : 0) - (b.isFavorite ? 1 : 0);
        break;
      case "shared":
        comparison = (a.shared ? 1 : 0) - (b.shared ? 1 : 0);
        break;
      case "created": {
        const aDate = a.createdAt || a.lastModified;
        const bDate = b.createdAt || b.lastModified;
        comparison = aDate.getTime() - bDate.getTime();
        break;
      }
      default:
        comparison = 0;
    }

    return ascending ? comparison : -comparison;
  });
}

export function filterFolders(
  folders: Folder[],
  filter: FilterOption,
  searchTerm: string = ""
): Folder[] {
  let filtered = [...folders];

  // Apply filter
  switch (filter) {
    case "favorites":
      filtered = filtered.filter(f => f.isFavorite);
      break;
    case "archived":
      filtered = filtered.filter(f => f.isArchived);
      break;
    case "shared":
      filtered = filtered.filter(f => f.shared);
      break;
    case "recent":
      filtered = filtered.filter(f => isRecent(f.lastModified));
      break;
    case "all":
    default:
      break;
  }

  // Apply search
  if (searchTerm.trim()) {
    const term = searchTerm.toLowerCase().trim();
    filtered = filtered.filter(f =>
      f.name.toLowerCase().includes(term) ||
      f.description?.toLowerCase().includes(term) ||
      f.tags?.some(tag => tag.toLowerCase().includes(term))
    );
  }

  return filtered;
}

export function searchFolders(folders: Folder[], query: string): Folder[] {
  if (!query.trim()) return folders;

  const term = query.toLowerCase().trim();
  return folders.filter(f =>
    f.name.toLowerCase().includes(term) ||
    (f.description && f.description.toLowerCase().includes(term)) ||
    (f.tags && f.tags.some(tag => tag.toLowerCase().includes(term)))
  );
}

export function getFolderBreadcrumbs(folders: Folder[], folderId: string): Folder[] {
  const path: Folder[] = [];
  let current = folders.find(f => f.id === folderId);

  while (current) {
    path.unshift(current);
    current = folders.find(f => f.id === current?.parentId);
  }

  return path;
}

export function getChildFolders(folders: Folder[], parentId: string | undefined): Folder[] {
  return folders.filter(f => f.parentId === parentId);
}

export function getFolderPath(folder: Folder, folders: Folder[]): string {
  const breadcrumbs = getFolderBreadcrumbs(folders, folder.id);
  return breadcrumbs.map(f => f.name).join(" / ");
}

/**
 * MOCK DATA
 */
export const MOCK_FOLDERS: Folder[] = [
  {
    id: "f1",
    name: "Project Documents",
    itemCount: 24,
    lastModified: new Date(Date.now() - 2 * 60 * 60 * 1000),
    color: "#6366f1",
    size: "128 MB",
    sizeBytes: 128 * 1024 * 1024,
    isFavorite: true,
    shared: true,
    tags: ["work", "important"],
    description: "Important project documentation",
  },
  {
    id: "f2",
    name: "Design Assets",
    itemCount: 156,
    lastModified: new Date(Date.now() - 24 * 60 * 60 * 1000),
    color: "#8b5cf6",
    size: "2.4 GB",
    sizeBytes: 2.4 * 1024 * 1024 * 1024,
    isFavorite: true,
    tags: ["design", "creative"],
    description: "All design files and assets",
  },
  {
    id: "f3",
    name: "Photography",
    itemCount: 892,
    lastModified: new Date(Date.now() - 3 * 24 * 60 * 60 * 1000),
    color: "#3b82f6",
    size: "12.8 GB",
    sizeBytes: 12.8 * 1024 * 1024 * 1024,
    tags: ["photos", "memories"],
  },
  {
    id: "f4",
    name: "Marketing Materials",
    itemCount: 47,
    lastModified: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    color: "#06b6d4",
    size: "340 MB",
    sizeBytes: 340 * 1024 * 1024,
    shared: true,
    tags: ["marketing", "public"],
  },
  {
    id: "f5",
    name: "Financial Reports",
    itemCount: 18,
    lastModified: new Date(Date.now() - 14 * 24 * 60 * 60 * 1000),
    color: "#10b981",
    size: "56 MB",
    sizeBytes: 56 * 1024 * 1024,
    tags: ["finance", "reports"],
    isArchived: true,
  },
  {
    id: "f6",
    name: "Client Presentations",
    itemCount: 32,
    lastModified: new Date(Date.now() - 5 * 24 * 60 * 60 * 1000),
    color: "#f59e0b",
    size: "780 MB",
    sizeBytes: 780 * 1024 * 1024,
    shared: true,
    tags: ["clients", "presentations"],
  },
  {
    id: "f7",
    name: "Source Code",
    itemCount: 1243,
    lastModified: new Date(Date.now() - 30 * 60 * 1000),
    color: "#14b8a6",
    size: "4.2 GB",
    sizeBytes: 4.2 * 1024 * 1024 * 1024,
    isFavorite: true,
    tags: ["code", "development"],
  },
  {
    id: "f8",
    name: "Music Library",
    itemCount: 340,
    lastModified: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000),
    color: "#ec4899",
    size: "18.5 GB",
    sizeBytes: 18.5 * 1024 * 1024 * 1024,
    tags: ["music", "entertainment"],
  },
  {
    id: "f9",
    name: "Archived Projects",
    itemCount: 67,
    lastModified: new Date(Date.now() - 60 * 24 * 60 * 60 * 1000),
    color: "#ef4444",
    size: "5.6 GB",
    sizeBytes: 5.6 * 1024 * 1024 * 1024,
    isArchived: true,
  },
  {
    id: "f10",
    name: "Personal Notes",
    itemCount: 112,
    lastModified: new Date(Date.now() - 4 * 60 * 60 * 1000),
    color: "#f97316",
    size: "24 MB",
    sizeBytes: 24 * 1024 * 1024,
    tags: ["personal", "notes"],
  },
];

/**
 * HELPER FUNCTIONS FOR MOCK DATA
 */
export function getMockFolders(count: number = 10): Folder[] {
  return MOCK_FOLDERS.slice(0, count);
}

export function getFolderById(id: string): Folder | undefined {
  return MOCK_FOLDERS.find(f => f.id === id);
}

export function getFavoriteFolders(): Folder[] {
  return MOCK_FOLDERS.filter(f => f.isFavorite);
}

export function getArchivedFolders(): Folder[] {
  return MOCK_FOLDERS.filter(f => f.isArchived);
}

export function getSharedFolders(): Folder[] {
  return MOCK_FOLDERS.filter(f => f.shared);
}

export function getRecentFolders(days: number = 7): Folder[] {
  return MOCK_FOLDERS.filter(f => isRecent(f.lastModified, days));
}

export function getFoldersByTag(tag: string): Folder[] {
  return MOCK_FOLDERS.filter(f => f.tags?.includes(tag));
}

export function getAllTags(): string[] {
  const tags = new Set<string>();
  MOCK_FOLDERS.forEach(f => f.tags?.forEach(t => tags.add(t)));
  return Array.from(tags);
}

export function createMockFolder(name: string): Folder {
  const color = getRandomColor();
  return {
    id: generateId(),
    name,
    itemCount: Math.floor(Math.random() * 100),
    lastModified: new Date(),
    color,
    size: formatFileSize(Math.floor(Math.random() * 1024 * 1024 * 100)),
    sizeBytes: Math.floor(Math.random() * 1024 * 1024 * 100),
    createdAt: new Date(),
    isFavorite: Math.random() > 0.8,
    shared: Math.random() > 0.7,
    tags: Math.random() > 0.6 ? ['new', 'recent'] : undefined,
  };
}

export default {
  MOCK_FOLDERS,
  FOLDER_COLORS,
  FOLDER_GRADIENTS,
  FOLDER_ICONS,
  getRandomColor,
  getGradientForColor,
  getRandomIcon,
  generateId,
  formatFileSize,
  parseFileSize,
  formatRelativeTime,
  formatDate,
  isRecent,
  isToday,
  isThisWeek,
  isThisMonth,
  getTotalFileCount,
  getTotalSize,
  getFolderStats,
  sortFolders,
  filterFolders,
  searchFolders,
  getFolderBreadcrumbs,
  getChildFolders,
  getFolderPath,
  getMockFolders,
  getFolderById,
  getFavoriteFolders,
  getArchivedFolders,
  getSharedFolders,
  getRecentFolders,
  getFoldersByTag,
  getAllTags,
  createMockFolder,
};