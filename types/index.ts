export interface ProjectType {
    title: string;
    description: string;
    technologies: string[];
    link: string;
    upcoming: boolean | false;
}

export type EmailResponse = {
    status: 'success';
    message: string;
} | {
    status: 'error';
    error: string;
}