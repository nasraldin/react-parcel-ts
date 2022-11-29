/*
=============================================================================
Copyright 2021 Nasr Aldin. All Rights Reserved.
Project: Online Rent @frontend
The use of this source code is governed by Nasr Aldin.
See LICENSE in the project root for license information.
=============================================================================
*/

// import { Axios, AxiosResponse } from 'axios';
// import { MimeType, X_API_GATEWAY_KEY } from '~shared';
// import { NotFoundError, ServiceUnavailableError, UnAuthorizedError, UnknownError } from '@root/src/app/common/error';
// import { ServiceError, ServiceResponse } from '../models';

// import { CrudOperations } from './crud-operations';
// import { StatusCode } from '../constants';
// import { SuccessResponse } from '../response';

// // import axios, { AxiosInstance } from 'axios';

// /**
//  * Basic implement of CrudOperations
//  *
//  * @usageExample
//  *
//  * export class UserService extends CrudService<User, number> {
//  *  constructor(protected http: HttpClient) {
//  *     super(http, "http://localhost:3000/api/bookmark");
//  *  }
//  * }
//  *
//  */
// export abstract class CrudService<T, Id> implements CrudOperations<T, Id> {
//   /**
//    * Cancel a request
//    */
//   // cancelToken = axios.CancelToken.source();

//   /**
//    * Name of the resource to be used e.g. User, (Entity/Model) etc..
//    */
//   resourceName: string | undefined;
//   /**
//    * Axios instance with a custom config
//    */
//   private axiosInstance?: Axios;

//   /**
//    *
//    * @param baseURL ReatApi baseURL
//    * @param endpoint endpoint name
//    * @example http://localhost:3001/api/endpintName
//    */
//   constructor(protected endpoint: string, protected baseURL?: string) {
//     this.configure();
//   }

//   create<T>(t: T): T {
//     if (!this.axiosInstance) {
//       // return throwError(() => new ServiceUnavailableError());
//     }

//     // return defer(() => this.axiosInstance!.post<T>(this.baseURL!, t)).pipe(map((result) => result.data));
//   }

//   get<T>(id: Id): T {
//     if (!this.axiosInstance) {
//       return throwError(() => new ServiceUnavailableError());
//     }

//     return defer(() => this.axiosInstance!.get<T>(this.baseURL + '/' + id)).pipe(map((result) => result.data));
//   }

//   getAll<T>(): ServiceResponse<T> {
//     console.log('getAll<T>(): ServiceResponse<T> ', this.axiosInstance);

//     if (!this.axiosInstance) {
//       console.log(new ServiceUnavailableError() as ServiceResponse<T>);

//       return new ServiceUnavailableError() as ServiceResponse<T>;
//       // subscription.unsubscribe();
//     }
//     // return this.axiosInstance!.get<T>(this.baseURL!).subscribe((response) =>
//     //   this.createResponse(response),
//     // ) as ServiceResponse<T>;
//     return this.axiosInstance!.get<T>(this.baseURL!).subscribe({
//       next: (v) => v,
//       error: (e) => console.error('e', e),
//       complete: () => console.info('complete'),
//     }) as ServiceResponse<T>;

//     // return defer(() => this.axiosInstance!.get<T>(this.baseURL!)).pipe(
//     //   map((result) => {
//     //     console.log('getAll result', result);
//     //     return this.createResponse(result);
//     //   }),
//     // ) as ServiceResponse<T>;
//   }

//   update<T>(id: Id, t: T): any {
//     if (this.axiosInstance) {
//       return this.axiosInstance.put<T>(this.baseURL + '/' + id, t, {});
//     }
//   }

//   delete<T>(id: Id): any {
//     if (this.axiosInstance) {
//       return this.axiosInstance.delete<T>(this.baseURL + '/' + id);
//     }
//   }

//   createResponse<T>(response: any): ServiceResponse<T> {
//     if (response.status != StatusCode.Successful.status) {
//       let tete = this.errorHandler(response);
//       return this.errorHandler(response);
//     }
//     const test = new SuccessResponse(response.data);
//     console.log('createResponse test', test);
//     return new SuccessResponse(response.data);
//   }

//   errorHandler(error: AxiosResponse): any {
//     console.log('errorHandler', error);
//     let errorMessage = '';

//     if (error instanceof ErrorEvent) {
//       // Get client-side error
//       errorMessage = error.error.message;
//     } else {
//       // Get server-side error
//       errorMessage = `Error Code: ${error.status}\nError: ${error}`;
//     }

//     let serviceError: ServiceError[] = [
//       {
//         name: 'string',
//         message: errorMessage,
//         exception: error,
//         displayToUser: true,
//         source: CrudService.name,
//         // target: 'string',
//       },
//     ];

//     if (error.status == StatusCode.NotFound.status) {
//       const test = new NotFoundError(serviceError);
//       console.log('error 404', test);
//       return throwError(() => new NotFoundError(serviceError));
//     }

//     if (error.status == StatusCode.Unauthorized.status) {
//       const test = new UnAuthorizedError(serviceError);
//       console.log('UnAuthorizedError', test);
//       // return throwError(() => new UnAuthorizedError(serviceError));
//     }

//     // if (error.status == StatusCode.Forbidden.status) {
//     //   const test = new AccessDeniedError(serviceError);
//     //   console.log('AccessDeniedError', test);
//     //   return throwError(() => new AccessDeniedError(serviceError));
//     // }

//     // if (error.status == StatusCode.BadRequest.status) {
//     //   const test = new BadRequestError(serviceError);
//     //   console.log('BadRequestError', test);
//     //   return throwError(() => new BadRequestError(serviceError));
//     // }

//     // if (error.status == StatusCode.InternalServerError.status) {
//     //   const test = new InternalServerErrorError(serviceError);
//     //   console.log('InternalServerErrorError', test);
//     //   return throwError(() => new InternalServerErrorError(serviceError));
//     // }

//     // if (error.status == StatusCode.ConnectionTimedOut.status) {
//     //   const test = new ConnectionTimedOutError(serviceError);
//     //   console.log('ConnectionTimedOutError', test);
//     //   return throwError(() => new ConnectionTimedOutError(serviceError));
//     // }

//     // if (error.status == StatusCode.ServiceUnavailable.status) {
//     //   const test = new ServiceUnavailableError(serviceError);
//     //   console.log('ServiceUnavailableError', test);
//     //   return throwError(() => new ServiceUnavailableError(serviceError));
//     // }

//     // if (error.status == StatusCode.NotImplemented.status) {
//     //   const test = new NotImplementedError(serviceError);
//     //   console.log('NotImplementedError', test);
//     //   return throwError(() => new NotImplementedError(serviceError));
//     // }

//     const uner = new UnknownError(serviceError);
//     console.log('UnknownError', uner);

//     return throwError(() => new UnknownError(serviceError));
//   }

//   configure(): void {
//     // Check endpoint is not null
//     if (!this.endpoint) {
//       throw Error();
//     }

//     // Check if baseURL is provided, if not map to X_API_GATEWAY_KEY from env
//     if (this.baseURL) {
//       this.baseURL = `${this.baseURL}/${this.endpoint}`;
//     } else {
//       this.baseURL = `${X_API_GATEWAY_KEY}/${this.endpoint}`;
//     }

//     this.axiosInstance = Axios.create({
//       baseURL: this.baseURL,
//       timeout: 1000,
//       headers: {
//         Accept: MimeType.JSON,
//         'X-Custom-Header': 'byNasr',
//       },
//     });

//     console.log('axiosInstance', this.baseURL, this.axiosInstance);
//   }
// }
export {};
