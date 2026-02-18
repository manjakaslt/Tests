
export interface BrandStrategy {
  name: string;
  industry: string;
  targetAudience: string;
  positioningStatement: string;
  keyTactics: string[];
  visualIdentityNotes: string;
}

export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}
