export type Mailer = {
  firstname: string;
  lastname: string;
  object: string;
  email: string;
  text: string;
};

export type Repository = {
  url: string;
  title: string;
  textLink?: string;
};

export interface ProjectCardProps {
  title: string;
  text: string;
  RepositoryUrl: Repository[];
  imagePath: string;
  techs: string[];
  ProjectUrl?: string;
}

export interface FullProjectCardProps extends Omit<ProjectCardProps, "techs"> {
  techsText: string;
  setOpen: (open: boolean) => void;
}
