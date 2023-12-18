export interface DownloadScreenLoadingProps {
    microserviceName: string;
    downloadUrl: string;
    loading?: boolean;
    t: (key: string) => string;
}
